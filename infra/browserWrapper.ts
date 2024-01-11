import { Browser, Page, chromium } from "playwright";

export class BrowserWrapper{
    browser: Browser | undefined;
    page: Page | undefined;

    async getPage(url?: string){
        this.browser = await chromium.launch();
        const context = await this.browser.newContext();
        this.page = await context.newPage();
        if(url){
            await this.page.goto(url);
            await this.page.setViewportSize({ width: 1920, height: 1080 });
        }
        return this.page;
    }

    async closeBrowser(){
        await this.browser?.close();
    }
}