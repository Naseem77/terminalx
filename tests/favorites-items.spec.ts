import { test, expect } from '@playwright/test';
import { BrowserWrapper } from '../infra/ui/browserWrapper'
import { addItem2Fav, removeItem2Fav} from '../config/items.json'
import { setRemoveItemToFavoritestRequest } from '../logic/api/request-body/removeItemFromFavorites';
import { setAddItemToFavoritestRequest } from '../logic/api/request-body/addItemToFavoritesRequest'
import urls from '../config/urls.json'
import { FavoritesListPage } from '../logic/POM/favoritesListPage';
import { ApiCalls } from '../logic/api/apiCalls';

test.describe('Cart Items Tests', () => {
  let browser: BrowserWrapper;
  let apiCall: ApiCalls;
  let favoritesListPage: FavoritesListPage;

  test.beforeEach(async () => {
    browser = new BrowserWrapper();
    apiCall = new ApiCalls();
  });

  test.afterEach(async () => {
    await browser.navigateTo(urls.ui.wishListUrl)
    await favoritesListPage.deleteAllFavoriteItems()
    await browser.closeBrowser();
  });

  test('Add Item to Favorites via API -> validation item in cart via ui', async () => {
    favoritesListPage = await browser.createNewPage(FavoritesListPage)
    await browser.navigateTo(urls.ui.wishListUrl)
    const addItemData = setAddItemToFavoritestRequest(addItem2Fav);
    
    const response = await apiCall.AddItemtoFavorites(addItemData);
    await favoritesListPage.refreshPage()
    expect(await favoritesListPage.getItemsCount()).toBe(response.data.addProductsToWishlist.anyWishlist.items_count)

  });

  test('Add Item to Favorites via Ui -> remove Item from Favorites via API -> validate item removed via ui', async () => {
    favoritesListPage = await browser.createNewPage(FavoritesListPage)
    await browser.navigateTo(urls.ui.wishListUrl)
    const addItemData = setRemoveItemToFavoritestRequest(removeItem2Fav);
    
    const response = await apiCall.RemoveItemFromFavorites(addItemData);
    await favoritesListPage.refreshPage()
    expect(0).toBe(response?.data.removeProductsFromAnyWishlistById.anyWishlist.items_count)

  });


});