import { Locator, Page } from '@playwright/test';
import { NavBar } from './NavBar';


export class MainPage extends NavBar {

    private menSection: Locator;
    private tshirtSection: Locator;
    private firstTshirt: Locator;
    private sizeBtn: Locator;
    private addToCartBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.menSection = page.locator("//a[text()='MEN']");
        this.tshirtSection = page.locator("//a[@href='/men/shirts?product_list_order=justlanded']");
        this.firstTshirt = page.locator("//a[@data-test-id='qa-product-link']");
        this.sizeBtn = page.locator("//div[text()='S']");
        this.addToCartBtn = page.locator("//button[text()='הוספה לסל']");
        this.initPage();
    }

    addItemToCart = async () => {
        await this.menSection.click();
        await this.tshirtSection.click();
        await this.firstTshirt.first().click();
        await this.page.waitForTimeout(1000);

        await this.sizeBtn.click();

        await this.addToCartBtn.click();
    }

    getItemCountInCart = async () => {
        return await this.getItemCount();
    }

}
