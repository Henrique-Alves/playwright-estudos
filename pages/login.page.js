export class LoginPage {
  constructor(page) {
    this.page = page;
    this.user = page.getByPlaceholder('Username');
    this.pass = page.getByPlaceholder('Password');
    this.loginBtn = page.getByRole('button', { name: 'Login' });
    this.error = page.locator('[data-test="error"]');
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(user, pass) {
    await this.user.fill(user);
    await this.pass.fill(pass);
    await this.loginBtn.click();
  }
}