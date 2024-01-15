import { Locator, Page } from '@playwright/test';
import { NavBar } from './navBar';

export class addressPage extends NavBar {

    private firstNameFeild: Locator;
    private lastNameFeild: Locator;
    private cityFeild: Locator;
    private streetFeild: Locator;
    private homeNumFeild: Locator;
    private phoneNumFeild: Locator;
    private mikoodFeild: Locator;
    private confirmBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.initPage();
        this.firstNameFeild = page.locator("//input[@name='firstname']");
        this.lastNameFeild = page.locator("//input[@name='lastname']");
        this.cityFeild = page.locator("//input[@id='downshift-0-input']");
        this.streetFeild = page.locator('//*[@id="downshift-1-input"]');
        this.homeNumFeild = page.locator("//input[@name='a_number']");
        this.mikoodFeild = page.locator("//input[@name='postcode']");
        this.phoneNumFeild = page.locator("//input[@name='telephone']");
        this.confirmBtn = page.locator("//button[text()='שמירת כתובת']");
    }

    fillAddressData = async (fNAme, lName, city,street, houseNum, mikood phone) => {
        await this.firstNameFeild.fill(fNAme);
        await this.lastNameFeild.fill(lName);
        await this.cityFeild.fill(city);
        await this.streetFeild.fill(street);
        await this.homeNumFeild.fill(houseNum);
        await this.mikoodFeild.fill(mikood);
        await this.phoneNumFeild.fill(phone);
        await this.confirmBtn.click();
    }

}
