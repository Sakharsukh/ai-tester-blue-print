import { test, expect } from '@playwright/test';

test('login_test.py conversion', async ({ page }) => {
    // Converted Code Start
const { Page } = require('playwright');

(async () => {
  const browser = await new Promise((resolve) => globalThis.setTimeout(resolve, 100));
  const page = new Page();

  await browser.launch();
  await browser.connect(page);

  await page.goto("https://www.example.com/login");

  const usernameInput = await page.locator("//input[@name='user_name']");
  await usernameInput.type('admin');

  const passwordInput = await page.locator("//input[@name='password']");
  await passwordInput.type('secret123');

  const submitButton = await page.locator("//button[@type='submit']");
  await submitButton.click();

  expect(await page.title()).toContain("Dashboard");

  await browser.close();
})();
    // Converted Code End
});