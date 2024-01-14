import { test, expect } from '@playwright/test';
import { chromium, Browser, Page } from 'playwright';
import { LoginPage } from '../logic/LoginPage';
import { MainPage } from '../logic/MainPage';
import { BrowserWrapper } from '../infra/browserWrapper';
import configJson from "../config.json"
import { describe } from 'node:test';
import { FilterItems } from '../logic/FilterItemsPage';

test.describe('Filter Items Validation', () => {

    const filterData = [
        { filter: 'מבצע', expected: 'מבצע' },
        { filter: 'JUST LANDED', expected: 'JUST LANDED' },
        { filter: 'BEST OFFER', expected: 'BEST OFFER' },
        { filter: 'מחיר: מהנמוך לגבוה', expected: 'מחיר: מהנמוך לגבוה' },
        { filter: 'מחיר: מהגבוה לנמוך', expected: 'מחיר: מהגבוה לנמוך' },


    ];

    filterData.forEach(({ filter, expected }) => {
        test(`filter items from shirts page -> check that ${filter} same as ${expected}`, async ({ page }) => {
            const browser = new BrowserWrapper;
            page = await browser.getPage(configJson['men-shirts-url']);
            const filterItems = new FilterItems(page);
            await filterItems.filterBy(filter);
            expect(filterItems.checkForFilter(expected)).toBeTruthy();

        });
    });



});


