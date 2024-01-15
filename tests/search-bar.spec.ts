import { test, expect } from '@playwright/test';
import { BrowserWrapper } from '../infra/browserWrapper';
import configJson from "../config.json"
import { SearchItems } from '../logic/SearchBar';






test.describe('New Product In Cart Validation', () => {



    test("add item to cart", async ({ page }) => {
        const browser = new BrowserWrapper;
        page = await browser.getPage(configJson.url);
        const search = new SearchItems(page);
        await search.fillSearchInput('טי שירט ריצה Nike Miler Flash', 'טי שירט ריצה Nike Miler Flash');


        await page.waitForTimeout(5000);


    })

})
