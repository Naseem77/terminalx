import { Locator,  Page, expect } from '@playwright/test';
import { BasePage } from '../infra/BasePage';
import {username, email, password} from "../config.json";


export class LoginPage extends BasePage{
    
    private connectBtn: Locator;
    private emailFeild: Locator;
    private passwordFeild: Locator;
    private loginBtn: Locator;
    //private nameLabel: Locator;

    constructor(page: Page){
        super(page);
        this.connectBtn = page.locator("//div[text()='התחברות']");
        this.emailFeild = page.locator("(//input[@name='email'])[2]");
        this.passwordFeild = page.locator("//input[@name='password']");
        this.loginBtn = page.locator("//button[text()='כניסה']");
        this.initPage();
    }

    connectUser = async () => {
        await this.connectBtn.click();
    } 

    fillEmail = async () => {
        await this.emailFeild.type(email, {delay: 100});
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