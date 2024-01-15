import { Locator, Page } from "playwright";

export const waitForElementToBeVisible = async (locator:Locator,time=400,retry=5):Promise<boolean> => {

    while(retry >0){
       if(await locator.isVisible()){
        return true
       }
       retry = retry-1
       await delay(time)
    }
    return false
}

export const waitForElementToBeEnabels = async (locator:Locator,time:number,retry:number):Promise<boolean> => {

    while(retry >0){
       if(await locator.isEnabled()){
        return true
       }
       retry = retry-1
       await delay(time)
    }
    return false
}

export const waitForTimeOut = async (page: Page, time=500) => {
    await page.waitForTimeout(time);
}

export function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}