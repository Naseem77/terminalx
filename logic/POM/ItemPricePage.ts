import { Locator, Page } from '@playwright/test';
import { NavBar } from './navBar';
import { waitForTimeOut } from '../../infra/utils';

export class ItemPricePAge extends NavBar {

    private firstPrice: Locator;
    private secondPrice: Locator;
    private totalPrice: Locator;
    private price1: String;
    private price2: String;
    private total: String;


    constructor(page: Page) {
        super(page);
        this.initPage();
        this.firstPrice = page.locator("(//div[@class='column_34Ze total-price_rLA-'])[1]");
        this.secondPrice = page.locator("(//div[@class='column_34Ze total-price_rLA-'])[2]");
        this.totalPrice = page.locator("(//div[@class='price_1d8Y rtl_2YKB'])[2]")
    }

    getPrices = async () => {
        this.price1 = (await this.firstPrice.innerText()).split(" ")[0];
        this.price2 = (await this.secondPrice.innerText()).split(" ")[0];
        this.total = (await this.totalPrice.innerText()).split(" ")[0];
    }

    checkTotal = async (): Promise<boolean> => {
        let convertedPrice1 = Number(this.price1);
        let convertedPrice2 = Number(this.price2);
        let total = Number(this.total);
        return total === (convertedPrice1 + convertedPrice2) ? true : false;
    }

}
