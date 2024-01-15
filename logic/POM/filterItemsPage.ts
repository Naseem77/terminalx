import { Locator, Page } from '@playwright/test';
import { BasePage } from '../../infra/ui/BasePage';


export class FilterItemsPage extends BasePage {

    private filterSelector: Locator;

    constructor(page: Page) {
        super(page);
        this.filterSelector = page.locator("//select[@name='sortField']");
        //this.initPage();
    }

    filterBy = async (filter: string) => {
        await this.filterSelector.selectOption(filter);
        await this.page.waitForTimeout(2000);// this need to be changed!
    }

    checkForFilter = async (filter: string): Promise<boolean> => {
        const url = this.page.url();
        return url.includes(filter) ? true : false;
    }

}
