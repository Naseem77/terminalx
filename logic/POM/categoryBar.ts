import { Page } from "@playwright/test";
import { BasePage } from "../../infra/ui/BasePage";

export class Category extends BasePage {

    constructor(page: Page) {
        super(page)
    }


    categoryClick = async (categoryName: string) => {


        const categoryLocator = this.page.locator(`//li[contains(@class,'item')]//a[contains(text(),'${categoryName}')]`);


        try {
            await categoryLocator.waitFor({ state: 'visible', timeout: 5000 }); // timeout is in milliseconds
            categoryLocator.first().click();

        } catch (e) {
            console.error(`Element with text "${categoryName}" not visible within timeout:`, e);
        }

    }

}