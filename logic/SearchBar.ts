import { promises } from "dns";
import { BasePage } from "../infra/BasePage";
import { Locator, Page } from '@playwright/test';


export class SearchItems extends BasePage {

    private searchBarBtn: Locator;
    private searchBarInput: Locator;


    constructor(page: Page) {
        super(page)
        this.searchBarBtn = page.locator('//button[@data-test-id="qa-header-search-button"]')
        this.searchBarInput = page.locator('//input[@data-test="search-input"]').last()

    }

    fillSearchInput = async (searchBarInput: string, searchResultview: string) => {
        await this.searchBarBtn.click();
        await this.searchBarInput.fill(searchBarInput)
        const searchResultBtn = this.page.locator(`//a[contains(text(),"${searchResultview}")]`);
        await searchResultBtn.click();


    }

    checkForSearch = async (search: string): Promise<boolean> => {
        const searchResult = this.page.locator(`//li[contains(text(),"${search}")]`)
        const count = await searchResult.count();
        return count > 0;
    }







}


