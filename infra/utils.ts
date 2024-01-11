import { Locator } from "playwright";

const waitForElementToBeVisibale = async (locator:Locator,time:number,retry:number):Promise<boolean> => {

    while(retry >0){
       if(await locator.isVisible()){
        return true
       }
       retry = retry-1
       await delay(time)
    }
    return false
}

const waitForElementToBeEnabels = async (locator:Locator,time:number,retry:number):Promise<boolean> => {

    while(retry >0){
       if(await locator.isEnabled()){
        return true
       }
       retry = retry-1
       await delay(time)
    }
    return false
}

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}