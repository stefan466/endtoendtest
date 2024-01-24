import { test, expect } from '@playwright/test';

test('Temperature conversion test', async ({ page }) => {
  await page.goto('https://www.rapidtables.com/convert/temperature/how-celsius-to-fahrenheit.html');

  await page.locator('input#x').fill('100'); // 100°C je tačka ključanja vode
  await page.locator('input[value="Convert"]').click();

  await page.waitForSelector('input#y');

  const result = await page.locator('input#y').inputValue();
  const resultValue = parseFloat(result);
  console.log(`Converted temperature: ${resultValue}°F`);
  expect(resultValue).toBeCloseTo(212, 1); // Dozvoljava malu grešku zbog zaokruživanja
});
