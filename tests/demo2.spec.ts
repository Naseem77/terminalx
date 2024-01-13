import { test, expect } from '@playwright/test';
import { chromium, Browser, Page } from 'playwright';
import { LoginPage } from '../logic/LoginPage';
import { MainPage } from '../logic/MainPage';
import { BrowserWrapper } from '../infra/browserWrapper';
import configJson from "../config.json"

test("add item to cart", async ({ page }) => {
    const browser = new BrowserWrapper;
    page = await browser.getPage(configJson.url);

    const mainPage = new MainPage(page);
    await mainPage.addItemToCart();
    const count = await mainPage.getItemCountInCart();
    expect(count).toBe('1');
})



