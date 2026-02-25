import { test, expect } from '../fixtures/base.fixture';

test.only('fluxo completo de compra', async ({ page, loginPage, inventoryPage }) => {
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    console.log('URL:', inventoryPage.page.url());

  const byDataTest = inventoryPage.page.locator('[data-test="product_sort_container"]');
  const byClass = inventoryPage.page.locator('select.product_sort_container');
  const allSelects = inventoryPage.page.locator('select');

  console.log('data-test count:', await byDataTest.count());
  console.log('class count:', await byClass.count());
  console.log('select count:', await allSelects.count());

    await expect(inventoryPage.title).toBeVisible();

    await inventoryPage.sortBy('az');

    const names = await inventoryPage.getNames();
    const sorted = [...names].sort((a, b) => a.localeCompare(b));
    expect(names).toEqual(sorted);

    await inventoryPage.addFirstItem();
    await expect(inventoryPage.cartBadge).toHaveText('1');
});