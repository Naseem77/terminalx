import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from '../../infra/ui/BasePage';
import { waitForTimeOut } from '../../infra/utils';

export class NavBar extends BasePage {

    private connectAccBtn: Locator;
    private myListBtn: Locator;
    private cartBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.myListBtn = page.locator("(//div[@class='cart-and-wishlist_3PHw']//a)[1]");
        this.cartBtn = page.locator("(//div[@class='cart-and-wishlist_3PHw']//a)[2]");
        //this.initPage();
    }

    clickConnectAccBtn = async () => {
        await this.connectAccBtn.click();
    }

    openMyList = async () => {
        await this.myListBtn.click();
    }

    openCart = async () => {
        await this.cartBtn.click();
    }

    getItemCount = async (): Promise<String> => {
        const itemCountInCart = this.page.locator("//span[@class='item-count_3Yeu'][1]");
        return await itemCountInCart.innerText();
    }

    removeItem = async () => {
        await this.cartBtn.click();
        await waitForTimeOut(this.page)
        const removeBtn = this.page.locator("//div[@data-tip='הסר פריט']/button[1]");
        await removeBtn.click();
        await this.page.waitForTimeout(500);
        const confirmBtn = this.page.locator("//button[text()='אישור']");
        await confirmBtn.click();
    }

    getFavoritsCount = async (): Promise<String> => {
        const favoritsCount = this.page.locator("//span[@class='item-count_3Yeu'][1]");
        return await favoritsCount.innerText();
    }
}