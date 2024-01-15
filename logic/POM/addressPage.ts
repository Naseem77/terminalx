import { Locator, Page } from '@playwright/test';
import { NavBar } from './navBar';

export class addressPage extends NavBar {

    private firstNameFeild: Locator;
    private lastNameFeild: Locator;
    private cityFeild: Locator;
    private phoneNumFeild: Locator;

    constructor(page: Page) {
        super(page);
        this.initPage();
        this.firstNameFeild = page.locator("//input[@name='firstname']");
        this.lastNameFeild = page.locator("//input[@name='lastname']");
        this.cityFeild = page.locator("//input[@id='downshift-0-input']");
        this.phoneNumFeild = page.locator("//input[@name='telephone']");
    }

    fillAddressData = async (fNAme, lName, city, phone) => {
        await this.firstNameFeild.fill(fNAme);
        await this.lastNameFeild.fill(lName);
        await this.cityFeild.fill(city);
        await this.phoneNumFeild.fill(phone);
    }

}
