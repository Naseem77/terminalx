import { test, expect } from '@playwright/test';
import { BrowserWrapper } from '../infra/ui/browserWrapper'
import { item1ToCart,item2ToCart } from '../items.json'
import { setAddItemToCartRequest } from '../logic/api/request-body/addItemToCartReuqest';
import urls from '../urls.json'
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
    await checkoutPage.deleteAllCartItems();
    await browser.closeBrowser();
  });
  
  test('Adding two Item to cart via API -> validating 2 items in cart via ui', async () => {
    checkoutPage = await browser.createNewPage(CheckOutPage)
    await browser.navigateTo(urls.ui.CartUrl)

    const addItemData1 = setAddItemToCartRequest(item1ToCart);
    await apiCall.addItemToCart(addItemData1)
    const addItemData2 = setAddItemToCartRequest(item2ToCart);
    const response = await apiCall.addItemToCart(addItemData2);

    await checkoutPage.refreshPage()
    expect(await checkoutPage.getItemsCount()).toBe(response?.data.addAnyProductsToAnyCart.total_quantity)

  });


});