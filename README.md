# Terminalx playwright

Complete E2E test plan & automated sanity for TerminalX website. Including infrastructure from scratch, UI tests, API tests, reporting, logging, and data management.

## It includes:

- Automation tests with playwright
- infrastructure built from scratch
- UI tests
- Reporting with allure
- API tests


## Setup

```
npm install

```


### Run

```
Running allure: 
All tests: npx playwright test --reporter=allure-playwright
Specific test example: npx playwright test -g "adding 2 items to the cart then checking the price" --reporter=allure-playwright

```



