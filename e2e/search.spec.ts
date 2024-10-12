import { expect, test } from '@playwright/test';

test('As a visitor I want to do a search to find films and series', async({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('Movie or serie title...').fill('Lord of the rings');
  await expect(page.getByRole('heading', { name: 'Movies' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'The Lord of the Rings: The Return of the King' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'The Lord of the Rings: The Fellowship of the Ring' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'The Lord of the Rings: The Two Towers' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Series' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'The Lord of the Rings: The Rings of Power', exact: true })).toBeVisible();
});
