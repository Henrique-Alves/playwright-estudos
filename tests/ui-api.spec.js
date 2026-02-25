import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';

test('Test completo: UI + API', async ({ page, request }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory\.html/);
  await expect(inventory.title).toBeVisible();

  const uiCount = await inventory.itemNames.count();
  expect(uiCount).toBeGreaterThan(0);

  const apiResp = await request.get('https://jsonplaceholder.typicode.com/users');
  expect(apiResp.status()).toBe(200);

  const users = await apiResp.json();
  expect(users.length).toBeGreaterThan(0);

  console.log('UI itens:', uiCount);
  console.log('API users:', users.length);
});