import { test, expect } from '@playwright/test';

test('Navigate and verify client work text', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://www.epam.com/');

  // Click on "Services" from the header menu
  await page.click('text=Services');

  // Click the "Explore Our Client Work" link
  await page.click('text=Explore Our Client Work');

  // Verify that the "Client Work" text is visible on the page
  const clientWorkText = await page.locator('text=Client Work');
  await expect(clientWorkText).toBeVisible();
});