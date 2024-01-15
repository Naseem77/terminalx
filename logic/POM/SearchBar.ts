import { Locator, Page } from '@playwright/test';
import { BasePage } from '../../infra/ui/BasePage';


export class SearchItems extends BasePage {
    private searchBarBtn: Locator;
    private searchBarInput: Locator;
    constructor(page: Page) {
        super(page)
        this.initPage()
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
        try {
            await searchResult.waitFor({ state: 'visible', timeout: 5000 }); // timeout is in milliseconds
        } catch (e) {
            console.error(`Element with text "${search}" not visible within timeout:`, e);
            return false;
        }
        const count = await searchResult.count();
        return count > 0;
    }

}


