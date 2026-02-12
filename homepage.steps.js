const {Given, When, Then,}=require("@cucumber/cucumber");

const {chromium, expect } = require("@playwright/test");
const { page }= require("playwright");

let browser;
let page;
       
         Given('browser is open', async function () {
           browser=await chromium.launch({ headless:false});
           const context=await browser.newContext();
           page = await context.newPage();
           });
       
         Given('user is on google search page', async function () {
           await page.goto("https://www.google.com");
            });
       
         When('user enters a text in search box', async function () {
            await page.fill('textarea[name="q"]','Playwright BDD');
            await page.keyboard.press('Enter');
         });
       
         Then('user is navigated to search results', async function () {
            await page.waitForSelector('#search');
            const title = await page.titile();
            assert(title.includes('PlaywrightBDD'))
            browser.close();
         
         });
         