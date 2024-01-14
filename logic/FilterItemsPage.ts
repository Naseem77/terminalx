import { Locator, Page } from '@playwright/test';
import { NavBar } from './NavBar';


export class FilterItems extends NavBar {

    private filterSelector: Locator;

    constructor(page: Page) {
        super(page);
        this.filterSelector = page.locator("//select[@name='sortField']");
        //this.initPage();
    }

    filterBy = async (filter: string) => {
        await this.filterSelector.selectOption(filter);
        await this.page.waitForTimeout(2000);
    }

    checkForFilter = async (filter: string): Promise<boolean> => {
        const url = await this.page.url();
        return url.includes(filter) ? true : false;
    }

}
