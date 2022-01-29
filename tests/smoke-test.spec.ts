import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('/');
  await page.locator(':nth-match(:text("About Me"), 1)').click();
  await expect(page).toHaveTitle(/About Me/);
});
