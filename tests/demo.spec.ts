import { test, expect } from '@playwright/test';
import { chromium, Browser, Page } from 'playwright';
import { LoginPage } from '../logic/LoginPage';

test("login", async ({page}) => {
    await page.goto("https://www.terminalx.com/");
    const loginPage = new LoginPage(page);

    await loginPage.fullLoginProcess();
    await page.waitForTimeout(5000);

    const username = await loginPage.returUserName();
    await expect(username).toContain("naseem");
}) 