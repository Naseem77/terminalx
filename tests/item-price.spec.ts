import { test, expect } from '@playwright/test';
import { BrowserWrapper } from '../infra/ui/browserWrapper';
import { item1ToCart,item2ToCart } from '../config/items.json';
import { setAddItemToCartRequest } from '../logic/api/request-body/addItemToCartReuqest';
import { ApiCalls } from '../logic/api/apiCalls';
import { ItemPricePAge } from '../logic/POM/ItemPricePage';
import urls from '../config/urls.json';

test.describe("checking the price of 2 items", () => {
    let browser: BrowserWrapper;
    let apiCall: ApiCalls;
    let itemPricePage: ItemPricePAge;

    test.beforeEach(async () => {
        browser = new BrowserWrapper();
        apiCall = new ApiCalls();
    });

    test.afterEach(async () => {
        await browser.closeBrowser();
    });
    
    test("adding 2 items to the cart then checking the price", async ({page}) => {
        itemPricePage = await browser.createNewPage(ItemPricePAge);
        await browser.navigateTo(urls.ui.checkPricePAge);

        const addItemData1 = setAddItemToCartRequest(item1ToCart);
        await apiCall.addItemToCart(addItemData1)
        const addItemData2 = setAddItemToCartRequest(item2ToCart);
        const response = await apiCall.addItemToCart(addItemData2);

        await itemPricePage.getPrices();
        expect(itemPricePage.checkTotal()).toBeTruthy();
    })
    
})