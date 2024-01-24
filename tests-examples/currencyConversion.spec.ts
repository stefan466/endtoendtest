import { test, expect } from '@playwright/test';

test('Currency conversion test', async ({ page }) => {
  await page.goto('https://exchangerate.host/#/converter');

  
  await page.locator('select[name="base_currency"]').selectOption('USD');
  await page.locator('select[name="target_currency"]').selectOption('EUR');
  await page.locator('input[name="base_amount"]').fill('1');
  await page.locator('button:has-text("Convert")').click();
  await page.waitForSelector('text=/1 USD = [0-9]+[.,][0-9]+ EUR/');

  await expect(page.locator('.conversion-result')).toContainText(/1 USD = [0-9]+[.,][0-9]+ EUR/);
});