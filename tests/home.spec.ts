import {test, expect} from '@playwright/test';

test('Show all products', async ({page}) => {
	await page.goto('https://github.com');

	const elements = page.getByText(/GitHub/).all();
	expect((await elements).length).toBeGreaterThan(0);
	// Await expect().toBeVisible();
});

test('Show all Filter products', async ({page}) => {
	await page.goto('/');

	await expect(page.getByText(/Apple/)).toBeVisible();

	// Const searchInput = page.getByLabel('Search');

	// await searchInput.fill('a');

	// await expect(page.getByText('Apple')).toBeVisible();

	// await searchInput.fill('aa');

	// await expect(page.getByText('Apple')).toBeHidden();
});

test('Filter products', async ({page}) => {
	await page.goto('/');

	await expect(page.getByText('Apple')).toBeVisible();

	const searchInput = page.getByLabel('Search');

	await searchInput.fill('a');

	await expect(page.getByText('Apple')).toBeVisible();

	await searchInput.fill('aa');

	await expect(page.getByText('Apple')).toBeHidden();

	await searchInput.fill('a');

	await expect(page.getByText('Apple')).toBeVisible();
	// Await expect(page.getByText('Apple')).toBeHidden();
});

test('Click the “Increase” button', async ({page}) => {
	await page.goto('/');

	// Await page.getByText('Increase').click();
	// await page.getByText('Increase').click();
	// await page.getByText('Increase').click();
	// await page.getByText('Increase').click();
	// await page.getByText('Increase').click();
	// await page.getByText('Increase').click();

	// await expect(page.getByText('6')).toBeVisible();
	const count = 13;

	await Promise.all((
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		[...Array(count)].map(async () => {
			await page.getByText('Increase').click();
		})
	));

	await expect(page.getByText(`${count}`)).toBeVisible();
});
