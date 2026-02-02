import { test, expect } from '@playwright/test';

test('search_test.py conversion', async ({ page }) => {
    // Converted Code Start
    page.locator('#login').click();
    page.goto('https://google.com');
    const searchBox = page.locator("//div[@class='test']");
    searchBox.click();
    await page.locator('.g').then(results => console.log(`Found ${results.length} results`));
    // Converted Code End
});