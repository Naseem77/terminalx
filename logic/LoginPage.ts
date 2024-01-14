import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from '../infra/BasePage';
import { username, email, password } from "../config.json";
import { NavBar } from './NavBar';


export class LoginPage extends NavBar {

    private emailFeild: Locator;
    private passwordFeild: Locator;
    private loginBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.emailFeild = page.locator("(//input[@name='email'])[2]");
        this.passwordFeild = page.locator("//input[@name='password']");
        this.loginBtn = page.locator("//button[text()='כניסה']");
        //this.initPage();
    }

    connectUser = async () => {
        await this.clickConnectAccBtn();
    }

    fillEmail = async () => {
        await this.emailFeild.fill(email);
    }

    fillPassword = async () => {
        await this.passwordFeild.fill(password);
    }

    clickLogin = async () => {
        await this.loginBtn.click();
    }

    fullLoginProcess = async () => {
        await this.connectUser();
        await this.page.waitForTimeout(1000);
        await this.fillEmail();
        await this.fillPassword();
        await this.clickLogin();
    }

    returUserName = async (): Promise<String> => {
        const nameLabel = this.page.locator(`//span[text()='${username}']`);
        return await nameLabel.innerText();
    }

}