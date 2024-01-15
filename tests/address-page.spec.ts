import { test, expect } from '@playwright/test';
import { BrowserWrapper } from '../infra/ui/browserWrapper'
import urls from '../config/urls.json'
import { addressPage } from '../logic/POM/addressPage';
import {first_name, last_name, city, street, house_num, mikood, phone} from "../config/addressInfo.json";

test.describe('Cart Items Tests', () => {
  let browser: BrowserWrapper;
  let addressPage: addressPage;

  test.beforeEach(async () => {
    browser = new BrowserWrapper();
  });

  test.afterEach(async () => {
    await browser.closeBrowser();
  });
  
  test('editing the address from the new address page', async () => {
    await browser.navigateTo(urls.ui.newAddressUrl);
    await addressPage.fillAddressData(first_name, last_name, city, phone);

    

  });


});