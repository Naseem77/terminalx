import { Locator,  Page } from '@playwright/test';
import { BasePage } from '../infra/BasePage';


export class LoginPage extends BasePage{
    
    private connectBtn: Locator;
    private emailFeild: Locator;
    private passwordFeild: Locator;
    private loginBtn: Locator;

    constructor(page: Page){
        super(page);
        this.initPage();
    }
   
}