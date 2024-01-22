import { test, expect } from '@playwright/test';
import { BrowserWrapper } from '../infra/ui/browserWrapper'
import { removeItem2Fav} from '../config/items.json'
import { setRemoveItemToFavoritestRequest } from '../logic/api/request-body/removeItemFromFavorites';
import urls from '../config/urls.json'
import { FavoritesListPage } from '../logic/POM/favoritesListPage';
import { ApiCalls } from '../logic/api/apiCalls';
import {MainPage} from '../logic/POM/MainPage'

test.describe('Cart Items Tests', () => {
  let browser: BrowserWrapper;

  test.beforeEach(async () => {
    browser = new BrowserWrapper();
  });

  test.beforeEach(async () => {
    const mainPage = await browser.createNewPage(MainPage, urls.ui.shoesProductPageUrl)
    await mainPage.addItemToFavorits();
  });

  test.afterEach(async () => {
    await browser.closeBrowser();
  });

  test('remove Item from Favorites via API -> validate item removed via ui', async () => {
    const favoritesListPage = await browser.createNewPage(FavoritesListPage, urls.ui.wishListUrl)
    const removeItemData = setRemoveItemToFavoritestRequest(removeItem2Fav);
    const apiCall = new ApiCalls();
    await apiCall.RemoveItemFromFavorites(removeItemData);
    await favoritesListPage.refreshPage()
    expect(await favoritesListPage.cartEmptyMessage()).toBeFalsy()

  });

});