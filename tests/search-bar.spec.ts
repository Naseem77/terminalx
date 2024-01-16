import { test, expect } from '@playwright/test';
import { SearchItems } from '../logic/POM/SearchBar';
import { BrowserWrapper } from '../infra/ui/browserWrapper';
import config from "../config/urls.json";

test.describe('Search For Items In SearchBar', () => {
    let browser: BrowserWrapper
    let searchPage: SearchItems;

    test.beforeEach(async () => {
        browser = new BrowserWrapper();
    });

    test.afterEach(async () => {
        await browser.closeBrowser();
    });

    const searchData = [
        { searchItem: 'טי שירט ריצה Nike Miler Flash', expected: 'טי שירט ריצה Nike Miler Flash' },
        { searchItem: 'סניקרס עור BB550VGA / גברים', expected: 'סניקרס עור BB550VGA / גברים' },
        { searchItem: 'חולצת טטרה עם כפתורים / 5Y-14Y', expected: 'חולצת טטרה עם כפתורים / 5Y-14Y' }
    ];

    searchData.forEach(({ searchItem, expected }) => {
        test(`search for ${searchItem} -> validate results as the ${expected} `, async () => {
            searchPage = await browser.createNewPage(SearchItems)
            await browser.navigateTo(config.ui.url)
            await searchPage.fillSearchProcess(searchItem, searchItem);
            await expect(searchPage.getSearchTitle(expected)).toBeVisible()
        });
    })
})
