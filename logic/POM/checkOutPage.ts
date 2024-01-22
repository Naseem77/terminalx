import {type Locator, type Page } from '@playwright/test';
import { BasePage } from '../../infra/ui/BasePage';
import { waitForElementToBeVisible } from '../../infra/utils';

export class CheckOutPage extends BasePage {

    private cartItems: Locator
    private deleteItemButton: Locator
    private cartEmptyMessage: Locator
   
    constructor(page: Page){
        super(page);
        this.cartItems = this.page.locator("//div[@class='cart-items-list_wmqo']/div")
        this.deleteItemButton = this.page.locator("//button[@class='tx-link-a icon_u36n remove_wqPe tx-link_29YD']")
        this.cartEmptyMessage = this.page.locator("//p[text()='סל הקניות שלך ריק.']")
        this.initPage();
    }
    
    async getItemsCount(){
        const result = await waitForElementToBeVisible(this.cartItems.first())
        if (!result) {throw new Error("Locator is not visible!")}
        return await this.cartItems.count();
    }

    async deleteAllCartItems(){
        const isVisible = await waitForElementToBeVisible(this.cartItems.first());
        if (!isVisible) return "No elements to delete!";
      
        const itemsCount = await this.getItemsCount();
        for (let i = itemsCount - 1; i >= 0; i--) {
          if (!await waitForElementToBeVisible(this.deleteItemButton.nth(i))) {
            throw new Error("Locator is not visible!");
          }
          await this.deleteItemButton.nth(i).click();
        }
    }

    async getCartEmptyMessage(){
      return await this.cartEmptyMessage.isVisible()
    }
}