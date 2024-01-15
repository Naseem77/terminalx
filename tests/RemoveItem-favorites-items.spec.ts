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
  let apiCall: ApiCalls;
  let favoritesListPage: FavoritesListPage;
  let mainPage: MainPage;

  test.beforeEach(async () => {
    browser = new BrowserWrapper();
    apiCall = new ApiCalls();
    mainPage = await browser.createNewPage(MainPage)
    await browser.navigateTo(urls.ui.shoesProductPageUrl)
    await mainPage.addItemToFavorits();
  });

  test.afterEach(async () => {
    await browser.closeBrowser();
  });

  test('remove Item from Favorites via API -> validate item removed via ui', async () => {
    favoritesListPage = await browser.createNewPage(FavoritesListPage)
    await browser.navigateTo(urls.ui.wishListUrl)
    const removeItemData = setRemoveItemToFavoritestRequest(removeItem2Fav);
    
    const response = await apiCall.RemoveItemFromFavorites(removeItemData);
    await favoritesListPage.refreshPage()
    expect(0).toBe(response?.data.removeProductsFromAnyWishlistById.anyWishlist.items_count)

  });


});