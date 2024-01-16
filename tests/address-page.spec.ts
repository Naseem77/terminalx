import { test, expect } from '@playwright/test';
import { BrowserWrapper } from '../infra/ui/browserWrapper'
import urls from '../config/urls.json'
import { AddressPage } from '../logic/POM/addressPage';
import {firstName, lastName, city, street, houseNumber, postCode, phone, countryId} from "../config/addressInfo.json";
import { ApiCalls } from '../logic/api/apiCalls';
import { setAddAddressRequest } from '../logic/api/request-body/addNewAddressRequest';

test.describe('address page tests', () => {
  let browser: BrowserWrapper;

  test.beforeEach(async () => {
    browser = new BrowserWrapper();
  });

  test.afterEach(async () => {
    const addressPage = await browser.createNewPage(AddressPage,urls.ui.addressPageUrl)
    await addressPage.deleteAllAddress();
    await browser.closeBrowser();
  });
  
  test('Add new address via api -> validate address is added via ui', async () => {
    const addressPage = await browser.createNewPage(AddressPage, urls.ui.addressPageUrl);

    const addAddressData = setAddAddressRequest(firstName,lastName,city,street,houseNumber,postCode,phone, countryId);
    const apiCall = new ApiCalls();
    await apiCall.AddNewAddress(addAddressData)

    await addressPage.refreshPage()    
    await expect(addressPage.validateAddressChanged()).toBeVisible()
    
  });
});