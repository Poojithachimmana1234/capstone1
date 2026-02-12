import { test, expect } from '@playwright/test';

test('should handle a basic alert and verify its message',async ({page})=>{ 
page.on('dialog',async dialog =>{

    console.log('Alert message: ${dialog message()}');
    expect(dialog.message()).toContain('I am a alert box!');
    await dialog.accept();
});

await page.goto('https://testpages.eviltester.com/pages/basics/alerts-javascript/')
await page.locator('//[@id="alertexamples"]');
})