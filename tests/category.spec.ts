import urls from '../config/urls.json'
import { test, expect } from '@playwright/test';
import { BrowserWrapper } from '../infra/ui/browserWrapper';
import { Category } from '../logic/POM/categoryBar';

test.describe('Filter Items Validation', () => {
    let browser: BrowserWrapper;
    let category: Category

    test.beforeEach(async () => {
        browser = new BrowserWrapper();
    });
    test.afterEach(async () => {
        await browser.closeBrowser();
    });

    Object.values(urls.categorys).forEach(async (categoryPath: string) => {
        test(`filter items from shirts page -> check that ${categoryPath}`, async () => {
            category = await browser.createNewPage(Category);
            await browser.navigateTo(urls.ui.url);
            await category.categoryClick(categoryPath);
            expect(category.checkForCategory(categoryPath)).toBeTruthy();
        });
    });

})