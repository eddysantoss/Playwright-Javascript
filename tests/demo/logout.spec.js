const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/login');
const { ProductsPage } = require('../../pages/products');
const { LogoutPage } = require('../../pages/logout');

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.expectHomePageIsVisible();
});

test('should logout successfully', async ({ page }) => {

    const productsPage = new ProductsPage(page);
    await productsPage.gotoProductsPage();
    await productsPage.addProductToCart('sauce-labs-backpack');
    await productsPage.goToCart();

    await page.click('#react-burger-menu-btn');
    await page.click('#logout_sidebar_link');

    await expect(page).toHaveURL('https://www.saucedemo.com/');
});