import { test, expect } from '@playwright/test';
import { BrowserWrapper } from '../infra/browserWrapper';
import configJson from "../config.json"
import { SearchItems } from '../logic/SearchBar';






test.describe('Search For Items In SearchBar', () => {
    let browser: BrowserWrapper
    let page;


    test.beforeAll(async () => {
        browser = new BrowserWrapper;

    });

    test.beforeEach(async () => {

        page = await browser.getPage(configJson.url);
    });





    const searchData = [
        { searchItem: 'טי שירט ריצה Nike Miler Flash', expected: 'טי שירט ריצה Nike Miler Flash' },
        { searchItem: 'סניקרס עור BB550VGA / גברים', expected: 'סניקרס עור BB550VGA / גברים' },
        { searchItem: 'חולצת טטרה עם כפתורים / 5Y-14Y', expected: 'חולצת טטרה עם כפתורים / 5Y-14Y' }

    ];
    searchData.forEach(({ searchItem, expected }) => {
        test(`search for ${searchItem} -> validate results as the ${expected} `, async () => {
            const search = new SearchItems(page);
            await search.fillSearchInput(searchItem, searchItem);
            expect(search.checkForSearch(expected)).toBeTruthy();


            await page.waitForTimeout(5000);


        });
    })



})
