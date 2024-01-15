import { test, expect } from '@playwright/test';
import { BrowserWrapper } from '../infra/ui/browserWrapper';
import urls from "../config/urls.json"
import { FilterItemsPage } from '../logic/POM/FilterItemsPage';

test.describe('Filter Items Validation', () => {
    let browser: BrowserWrapper;
    let filterItemPage : FilterItemsPage

    test.beforeEach(async () => {
        browser = new BrowserWrapper();
      });
    
      test.afterEach(async () => {
        await browser.closeBrowser();
      });

    const filterData = [
        { filter: 'מבצע', expected: 'מבצע' },
        { filter: 'JUST LANDED', expected: 'JUST LANDED' },
        { filter: 'BEST OFFER', expected: 'BEST OFFER' },
        { filter: 'מחיר: מהנמוך לגבוה', expected: 'מחיר: מהנמוך לגבוה' },
        { filter: 'מחיר: מהגבוה לנמוך', expected: 'מחיר: מהגבוה לנמוך' },
    ];

    filterData.forEach(({ filter, expected }) => {
        test(`filter items from shirts page -> check that ${filter} same as ${expected}`, async ({ page }) => {
            filterItemPage = await browser.createNewPage(FilterItemsPage)
            await browser.navigateTo(urls.ui.menShirtsUrl)
            await filterItemPage.filterBy(filter);
            expect(filterItemPage.checkForFilter(expected)).toBeTruthy();

        });
    });

});


