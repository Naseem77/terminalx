import { test, expect } from '@playwright/test';
import { BrowserWrapper } from '../infra/ui/browserWrapper'
import { item1ToCart,item2ToCart } from '../config/items.json'
import { setAddItemToCartRequest } from '../logic/api/request-body/addItemToCartReuqest';
import urls from '../config/urls.json'
import { CheckOutPage } from '../logic/POM/checkOutPage';
import { ApiCalls } from '../logic/api/apiCalls';

test.describe('Cart Items Tests', () => {
  let browser: BrowserWrapper;

  test.afterEach(async () => {
    const checkoutPage = await browser.createNewPage(CheckOutPage,urls.ui.CartUrl)
    await checkoutPage.deleteAllCartItems();
    await browser.closeBrowser();
  });
  
  test('Adding two Item to cart via API -> validating 2 items in cart via ui', async () => {
    browser = new BrowserWrapper();
    const checkoutPage = await browser.createNewPage(CheckOutPage,urls.ui.CartUrl)

    const addItemData1 = setAddItemToCartRequest(item1ToCart);
    const apiCall = new ApiCalls();
    await apiCall.addItemToCart(addItemData1)
    const addItemData2 = setAddItemToCartRequest(item2ToCart);
   await apiCall.addItemToCart(addItemData2);

    await checkoutPage.refreshPage()    
    expect(2).toBe(await checkoutPage.getItemsCount())
  });


});