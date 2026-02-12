import { test, expect } from '@playwright/test';

test('Working with Checkboxes', async ({ page })=> {
    await page.goto('https://the-internet.herokuapp.com/checkboxes')
    await expect(page.locator('#checkboxes')).toBeVisible()
    expect(await page.isChecked('input[type=checkbox]:nth-child(1)')).toBeFalsy()
    expect(await page.isChecked('input[type=checkbox]:nth-child(3)')).toBeTruthy()
    await page.check('input[type=checkbox]:nth-child(1)')
    await page.uncheck('input[type=checkbox]:nth-child(3)')
    expect(await page.isChecked('input[tytpe=type=checkbox]:nth-child(1)')).toBeThruthy()
        expect(await page.isChecked('input[type=checkbox]:nth-child(3)')).toBeFalsy()
            await page.check('input[type=checkbox]:nth-child(3)')
                await page.uncheck('input[type=checkbox]:nth-child(1)')
    });