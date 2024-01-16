import { Locator, Page } from '@playwright/test';
import { BasePage } from '../../infra/ui/BasePage';
import { waitForElementToBeVisible } from '../../infra/utils';

export class AddressPage extends BasePage {

    private address: Locator;
    private removeAddressButton: Locator;
    private confirmRemoveAddressButton: Locator;

    constructor(page: Page) {
        super(page);
        this.initPage();
        this.address = page.locator("//tbody[@class='table-wrap-body_3QCY rtl_1cnX']")
        this.removeAddressButton = page.locator("//button[text()='מחק']")
        this.confirmRemoveAddressButton = page.locator("//button[text()='אישור']")
    }

    validateAddressChanged = () : Locator => {
        return this.address
    }

    async getAddressCount(){
        const result = await waitForElementToBeVisible(this.removeAddressButton.first())
        if (!result) {throw new Error("Locator is not visible!")}
        return await this.removeAddressButton.count();
    }

    async deleteAllAddress(){
        const isVisible = await waitForElementToBeVisible(this.removeAddressButton.first());
        if (!isVisible) return "No elements to delete!";
      
        const itemsCount = await this.getAddressCount();
        for (let i = itemsCount - 1; i >= 0; i--) {
          if (!await waitForElementToBeVisible(this.removeAddressButton.nth(i))) {
            throw new Error("Locator is not visible!");
          }
          await this.removeAddressButton.nth(i).click();
          await this.confirmRemoveAddressButton.last().click()
        }
    }

}
