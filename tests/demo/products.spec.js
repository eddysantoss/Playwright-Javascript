const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/login');
const { ProductsPage } = require('../../pages/products');

test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.expectHomePageIsVisible();
});

test('add product to cart', async ({ page }) => {

    const productsPage = new ProductsPage(page);
    await productsPage.gotoProductsPage();
    await productsPage.addProductToCart('sauce-labs-backpack');
    await productsPage.removeProductFromCart('sauce-labs-backpack');
    await productsPage.goToCartAndRemove('sauce-labs-backpack');

});