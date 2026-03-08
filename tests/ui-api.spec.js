import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { UsersClient } from '../api/users.client.js';
import { buildUsers } from '../builders/user.builder.js';

test('@regression Test completo: UI + API', async ({ page, request }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const usersApi = new UsersClient(request);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory\.html/);
  await expect(inventory.title).toBeVisible();

  const uiCount = await inventory.itemNames.count();
  expect(uiCount).toBeGreaterThan(0);

    
    const users = await usersApi.getUsers()
    expect(users.length).toBeGreaterThan(0);

  console.log('UI itens:', uiCount);
  console.log('API users:', users.length);
});

test('@regression Teste de api mockada: UI + API mockado', async ({ page }) => {
    const usersMock = buildUsers(5); //gera 5 usuários fake

  // intercepta qualquer chamada para users
  await page.route('**/users', async route => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(usersMock)
    });
  });

  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory\.html/);
  await expect(inventory.title).toBeVisible();

  const uiCount = await inventory.itemNames.count();
  expect(uiCount).toBeGreaterThan(0);

  console.log('Mock users:', usersMock.length);
});