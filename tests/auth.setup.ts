import { Page, expect, test as setup } from '@playwright/test';
import { BrowserWrapper } from '../infra/browserWrapper';
import configJson from "../config.json"


let browser: BrowserWrapper;
let page: Page;


setup('authenticate', async ({ page }) => {
    const browser = new BrowserWrapper;
    page = await browser.getPage(configJson.url);
    const loginpage = new LoginPage(page)
    await loginpage.fullLoginProcess();
    await loginpage.returUserName();

})