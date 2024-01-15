import { Locator, Page } from '@playwright/test';
import { NavBar } from './navBar';
import { waitForElementToBeVisible } from '../../infra/utils';

export class addressPage extends NavBar {

    constructor(page: Page) {
        super(page);
        this.initPage();
    }

    

}
