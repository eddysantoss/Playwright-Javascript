import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login';

test('should login with valid credentials', async ({ page }) => {

  const loginPage = new LoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.expectHomePageisVisible();

});