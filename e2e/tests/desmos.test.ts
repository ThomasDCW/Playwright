import { test, expect } from '@playwright/test';

test('go to website', async ({ page }) => {
  await page.goto('https://www.desmos.com/scientific?lang=fr/');
  await page.pause();
});

test('1 + 1 = 2', async ({ page }) => {
  await page.goto('https://www.desmos.com/scientific?lang=fr');
  await page.locator(`[aria-label="1"]`).click();
  await page.locator(`[aria-label="Plus"]`).click();
  await page.locator(`[aria-label="1"]`).click();
  await page.locator(`[aria-label="Entrée"]`).click();
  await expect(page.locator(`div.dcg-basic-expression-value`)).toContainText(
    'equals 2'
  );
});
test('2 x 2 = 4', async ({ page }) => {
  await page.goto('https://www.desmos.com/scientific?lang=fr');
  await page.locator(`[aria-label="2"]`).click();
  await page.locator(`[aria-label="Multiplier"]`).click();
  await page.locator(`[aria-label="2"]`).click();
  await page.locator(`[aria-label="Entrée"]`).click();
  await expect(page.locator(`div.dcg-basic-expression-value`)).toContainText(
    'equals 4'
  );
});
