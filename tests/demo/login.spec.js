const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/login');

test('should login with valid credentials', async ({ page }) => {

  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.expectHomePageIsVisible();

});