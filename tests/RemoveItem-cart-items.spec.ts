import { test, expect } from '@playwright/test';
import { BrowserWrapper } from '../infra/ui/browserWrapper'
import { item1ToCart,item2ToCart } from '../config/items.json'
import { setAddItemToCartRequest } from '../logic/api/request-body/addItemToCartReuqest';
import urls from '../config/urls.json'
import { CheckOutPage } from '../logic/POM/checkOutPage';
import { ApiCalls } from '../logic/api/apiCalls';

test.describe('Cart Items Tests', () => {
  let browser: BrowserWrapper;
  let apiCall: ApiCalls;
  let checkoutPage: CheckOutPage;

  test.beforeEach(async () => {
    browser = new BrowserWrapper();
    apiCall = new ApiCalls();
  });

  test.afterEach(async () => {
    await browser.navigateTo(urls.ui.CartUrl)
    await browser.closeBrowser();
  });
  
  test('Adding one Item to cart via API -> remove and validate items in cart via ui', async () => {
    checkoutPage = await browser.createNewPage(CheckOutPage)
    await browser.navigateTo(urls.ui.CartUrl)

    const addItemData2 = setAddItemToCartRequest(item2ToCart);
    await apiCall.addItemToCart(addItemData2);

    await checkoutPage.refreshPage()
    await checkoutPage.deleteAllCartItems()
    
    expect((await checkoutPage.validateCartEmptyMessage()).valueOf()).toBeFalsy()

  });


});