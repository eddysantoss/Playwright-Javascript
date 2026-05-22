import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login';
import { ProductsPage } from '../../pages/products';

test('should logout successfully', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login('standard_user', 'secret_sauce');

    const productsPage = new ProductsPage(page);
    await productsPage.gotoProductsPage();
    await productsPage.addProductToCart('sauce-labs-backpack');
    await productsPage.goToCart();

    await page.click('#react-burger-menu-btn');
    await page.click('#logout_sidebar_link');

    await expect(page).toHaveURL('https://www.saucedemo.com/');
});