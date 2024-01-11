import { test, expect } from '@playwright/test';
import { chromium, Browser, Page } from 'playwright';
import { BrowserWrapper } from '../infra/browserWrapper';
import configJson from "../config.json"


test.describe('Form Validation', () => {
  let browser: Browser;
  let page: Page;

  test.beforeEach(async () => {

  });

  test.afterEach(async () => {

  });

});