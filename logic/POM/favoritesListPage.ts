import {type Locator, type Page } from '@playwright/test';
import { BasePage } from '../../infra/ui/BasePage';
import { waitForElementToBeVisible } from '../../infra/utils';

export class FavoritesListPage extends BasePage {

    private favoritesItems: Locator
    private deleteItemButton: Locator
   
    constructor(page: Page){
        super(page);
        this.initPage();
        this.favoritesItems = this.page.locator("//div[@class='title-wrap_2RT2']/following-sibling::div/li")
        this.deleteItemButton = this.page.locator("//div[@class='btn-ltr_35WF btn-quick_3Pv7 btn-remove_274T']")
    }
    async getItemsCount(){
        const result = await waitForElementToBeVisible(this.favoritesItems.first())
        if (!result) {throw new Error("Locator is not visible!")}
        return await this.favoritesItems.count();
    }

    async deleteAllFavoriteItems(){
        const isVisible = await waitForElementToBeVisible(this.favoritesItems.first());
        if (!isVisible) return "No elements to delete!";
      
        const itemsCount = await this.getItemsCount();
        for (let i = itemsCount - 1; i >= 0; i--) {
          if (!await waitForElementToBeVisible(this.deleteItemButton.nth(i))) {
            throw new Error("Locator is not visible!");
          }
          await this.deleteItemButton.nth(i).click();
        }
    }
}