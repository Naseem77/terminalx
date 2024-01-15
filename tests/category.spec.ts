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


    test(`Category`, async () => {
        category = await browser.createNewPage(Category)
        await browser.navigateTo(urls.ui.url)
        category.categoryClick(urls.categorys.JustLanded);

    });




})