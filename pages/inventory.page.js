export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.title = page.getByText('Products');
    this.sort = page.locator('select.product_sort_container'); // ✅ CORRETO
    this.itemNames = page.locator('.inventory_item_name');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.addFirst = page.locator('.inventory_item').first().getByRole('button');
    this.inputUser = page.locator('[data-test="username"]');
    this.inputPassword = page.locator('[data-test="password"]');
    this.loginBtn = page.getByRole('button', { name: 'Login' });
  }

  async waitLoaded() {
    await this.page.waitForURL('**/inventory.html');
    await this.title.waitFor({ state: 'visible' });
    await this.sort.waitFor({ state: 'visible' }); // agora vai ✅
  }

  async sortBy(value) {
    await this.waitLoaded();
    await this.sort.selectOption(value); // values: az | za | lohi | hilo
  }

  async getNames() {
    await this.waitLoaded();
    return await this.itemNames.allTextContents();
  }

  async addFirstItem() {
    await this.waitLoaded();
    await this.addFirst.click();
  }
}