import { test, expect } from '@playwright/test';
import { MainPage } from '../logic/MainPage';
import { BrowserWrapper } from '../infra/browserWrapper';
import configJson from "../config.json";
import { FilterItems } from '../logic/FilterItemsPage';

test("add item to cart", async ({ page }) => {
    await page.goto("https://www.terminalx.com/men/shirts");
    const filterItems = new FilterItems(page);
    await filterItems.filterBy("BEST OFFER");
    expect(filterItems.checkForFilter("BEST OFFER")).toBeTruthy();
})



