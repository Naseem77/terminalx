import { Page } from "@playwright/test";
import { BasePage } from "../../infra/ui/BasePage";

export class Category extends BasePage {
    private categoryLocator = (categoryName: string) =>
        this.page.locator(`//a[@href="${categoryName}"]`).first()

    constructor(page: Page) {
        super(page)
    }

    categoryClick = async (categoryName: string) => {
        await this.categoryLocator(categoryName).click();

    }
    checkForCategory = async (category: string): Promise<boolean> => {
        const url = this.page.url();
        return url.includes(category) ? true : false;
    }
}