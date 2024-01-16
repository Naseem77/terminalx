import { test, expect } from '@playwright/test';
import { BrowserWrapper } from '../infra/ui/browserWrapper';
import { addItem2Fav } from '../config/items.json';
import { setAddItemToFavoritestRequest } from '../logic/api/request-body/addItemToFavoritesRequest';
import urls from '../config/urls.json';
import { FavoritesListPage } from '../logic/POM/favoritesListPage';
import { ApiCalls } from '../logic/api/apiCalls';

test.describe('Cart Items Tests', () => {
  let browser: BrowserWrapper;

  test.beforeEach(async () => {
    browser = new BrowserWrapper();
  });

  test.afterEach(async () => {
    const favoritesListPage = await browser.createNewPage(FavoritesListPage, urls.ui.wishListUrl)
    await favoritesListPage.deleteAllFavoriteItems()
    await browser.closeBrowser();
  });

  test('Add Item to Favorites via API -> validation item in cart via ui', async () => {
    browser = new BrowserWrapper();
    const favoritesListPage = await browser.createNewPage(FavoritesListPage, urls.ui.wishListUrl)
 
    const addItemData = setAddItemToFavoritestRequest(addItem2Fav);
    const apiCall = new ApiCalls();
    const response = await apiCall.AddItemtoFavorites(addItemData);
    await favoritesListPage.refreshPage()
    expect(1).toBe(await favoritesListPage.getItemsCount())

  });

});