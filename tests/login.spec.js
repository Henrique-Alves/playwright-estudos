import { LoginPage } from '../pages/login.page';
import { test, expect } from '../fixtures/base.fixture';

test('login com sucesso', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/);
});

test('Validar pagina de login', async ({ loginPage, inventoryPage }) => {
  await loginPage.goto();

  await expect(inventoryPage.inputUser).toBeVisible();
  await expect(inventoryPage.inputPassword).toBeVisible();
  await expect(inventoryPage.loginBtn).toBeVisible();
});