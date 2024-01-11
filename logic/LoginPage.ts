import { Locator,  Page, expect } from '@playwright/test';
import { BasePage } from '../infra/BasePage';
import {username, password} from "../config.json";


export class LoginPage extends BasePage{
    
    private connectBtn: Locator;
    private emailFeild: Locator;
    private passwordFeild: Locator;
    private loginBtn: Locator;
    private nameLabel: Locator;

    constructor(page: Page){
        super(page);
        this.connectBtn = page.locator('//*[@id="app-root"]/div[2]/header/div/div[2]/div[1]/div[1]/div/div/div/a');
        this.emailFeild = page.locator('//*[@id="top-portal-root"]/div[3]/div[1]/form/div[1]/div/input');
        this.passwordFeild = page.locator('//*[@id="top-portal-root"]/div[3]/div[1]/form/div[2]/div/input');
        this.loginBtn = page.locator('//*[@id="top-portal-root"]/div[3]/div[1]/form/button[3]');
        this.nameLabel = page.locator('//*[@id="app-root"]/div[2]/header/div/div[2]/div[1]/div[1]/div/div/div/button/span[2]');
        this.initPage();
    }

    connectUser = async () => {
        await this.connectBtn.click();
    } 

    fillEmail = async () => {
        await this.emailFeild.click();
        await this.emailFeild.fill(username);
    }

    fillPassword = async () => {
        await this.passwordFeild.click();
        await this.passwordFeild.fill(password);
    }

    clickLogin = async () => {
        await this.loginBtn.click();
    }

    fullLoginProcess = async () => {
        await this.connectUser();
        await this.fillEmail();
        await this.fillPassword();
        await this.clickLogin();
    }

    returUserName = async (): Promise<String> => {
        return await this.nameLabel.innerText();
    }
   
}