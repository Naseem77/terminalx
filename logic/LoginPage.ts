import { Locator,  Page } from '@playwright/test';
import { BasePage } from '../infra/BasePage';


export class LoginPage extends BasePage{
    
    private connectBtn: Locator;
    private emailFeild: Locator;
    private passwordFeild: Locator;
    private loginBtn: Locator;

    constructor(page: Page){
        super(page);
        this.connectBtn = page.locator('//*[@id="app-root"]/div[2]/header/div/div[2]/div[1]/div[1]/div/div/div/a');
        this.emailFeild = page.locator('//*[@id="top-portal-root"]/div[3]/div[1]/form/div[1]/div/input');
        this.passwordFeild = page.locator('//*[@id="top-portal-root"]/div[3]/div[1]/form/div[2]/div/input');
        this.loginBtn = page.locator('//*[@id="top-portal-root"]/div[3]/div[1]/form/button[3]');
        this.initPage();
    }
   
}