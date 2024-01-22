import { Locator, Page } from '@playwright/test';
import { waitForElementToBeVisible } from '../../infra/utils';
import { BasePage } from '../../infra/ui/BasePage';

export class MainPage extends BasePage {

    private favoritsBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.initPage();
        this.favoritsBtn = page.locator("//button[@class='toggle_3KGH rtl_fPrD']");
    }

    addItemToFavorits = async () => {
        const isVisible = await waitForElementToBeVisible(this.favoritsBtn);
        if (!isVisible) return "No elements to delete!";
        await this.favoritsBtn.click();
    }

}
