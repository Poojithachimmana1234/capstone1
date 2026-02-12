import { test, expect } from '@playwright/test';
import { log } from 'node:console';

test('getbyRole loacator demo',async({page})=>{
    await page.goto('https://parabank.parasoft.com/parabank/index.htm')

    await page.getByRole("link",{name:"Forgot login info?"}).click()
})


test('getByText',async({page})=>{ 
    await page.goto('https://parabank.parasoft.com/parabank/index.htm')
    await page.getByText('Forgot login info?').click()
})

test('getByText locator demo',async ({ page })=> {
    await page.goto('https://login.salesforce.com/')
    await page.getByLabel('username').fill('puja')
})

test('getByPlaceholder locator demo',async ({page})=>{
    await page.goto('https://www.flipkart.com/')
    await page.getByPlaceholder('search').fill('dresses for women')
})

test('getByAltText locator demo',async ({page})=> {
    await page.goto('https://bookswagon.com')
    await page.getByPlaceholder('Search by title,Author,publisher or ISBN').fill('Fiction')
    await page.locator("xpath=//*[@name='btnTopSearch']").click();
    await page.getByAltText('Sacred waters').click();
})
 
 test('getByTitle locator demo',async ({page})=>{
    await page.goto('https://parabank.parasoft.com/')
    await page.getByRole('link',alt="paraBank").click();    

 })