import { test, expect } from '@playwright/test';
import { chromium, Browser, Page } from 'playwright';
import { LoginPage } from '../logic/LoginPage';
import { MainPage } from '../logic/MainPage';

test("add item to cart", async ({page}) => {
    await page.goto("https://www.terminalx.com/");

    const mainPage = new MainPage(page);
    await mainPage.addItemToCart();
    const count = await mainPage.getItemCountInCart();
    expect(count).toBe('1');
}) 