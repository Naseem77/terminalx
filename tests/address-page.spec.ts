import { test, expect } from '@playwright/test';
import { BrowserWrapper } from '../infra/ui/browserWrapper'
import urls from '../config/urls.json'
import { AddressPage } from '../logic/POM/addressPage';
import {first_name, last_name, city, street, house_num, mikood, phone} from "../config/addressInfo.json";

test.describe('address page tests', () => {
  let browser: BrowserWrapper;
  let addressPage: AddressPage;

  test.beforeEach(async () => {
    browser = new BrowserWrapper();
  });

  test.afterEach(async () => {
    await browser.closeBrowser();
  });
  
  test('editing the address from the new address page', async ({page}) => {
    addressPage = await browser.createNewPage(AddressPage);
    await browser.navigateTo(urls.ui.newAddressUrl);
    await addressPage.fillAddressData(first_name, last_name, city, street, house_num, mikood, phone);    
    await addressPage.validateAddressChanged();
    await page.waitForURL(urls.ui.addressPage);
    expect(page.url()).toBe(urls.ui.addressPage);
  });
});