import { Locator, Page } from '@playwright/test';
import { NavBar } from './navBar';
import { waitForElementToBeVisible } from '../../infra/utils';

export class MainPage extends NavBar {

    private favoritsBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.initPage();
        this.favoritsBtn = page.locator("//button[@class='toggle_3KGH rtl_fPrD']");
    }

    removeItemFromCart = async () => {
        return await this.removeItem();
    }

    getItemCountInCart = async () => {
        return await this.getItemCount();
    }

    addItemToFavorits = async () => {
        const isVisible = await waitForElementToBeVisible(this.favoritsBtn);
        if (!isVisible) return "No elements to delete!";
        await this.favoritsBtn.click();
    }

}
