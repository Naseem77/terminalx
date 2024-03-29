import { Locator, Page } from '@playwright/test';
import { BasePage } from '../../infra/ui/BasePage';

export class SearchItems extends BasePage {
    private searchBarBtn: Locator;
    private searchBarInput: Locator;
    private searchResult = (search: string) => this.page.locator(`//h1[contains(text(),"${search}")]`)
    private searchResultBtn = (searchResultview: string) => this.page.locator(`//a[contains(text(),"${searchResultview}")]`);

    constructor(page: Page) {
        super(page)
        this.initPage()
        this.searchBarBtn = page.locator('//button[@data-test-id="qa-header-search-button"]')
        this.searchBarInput = page.locator('//input[@data-test="search-input"]').last()

    }

    fillSearchProcess = async (searchBarInput: string, searchResultview: string) => {
        await this.searchBarBtn.click();
        await this.searchBarInput.fill(searchBarInput)
        await this.searchResultBtn(searchResultview).click();
    }

    getSearchTitle = (search: string) : Locator => {
        return this.searchResult(search)
    }

}



