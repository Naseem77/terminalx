import { Page } from "@playwright/test";
import { BasePage } from "../../infra/ui/BasePage";

export class Category extends BasePage {

    constructor(page: Page) {
        super(page)
    }


}