import { test, expect } from '../fixtures/base.fixture';

test('fluxo completo de compra', async ({ loginPage, inventoryPage }) => {
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(inventoryPage.title).toBeVisible();

    await inventoryPage.sortBy('az');

    const names = await inventoryPage.getNames();
    const sorted = [...names].sort((a, b) => a.localeCompare(b));
    expect(names).toEqual(sorted);

    await inventoryPage.addFirstItem();
    await expect(inventoryPage.cartBadge).toHaveText('1');
});