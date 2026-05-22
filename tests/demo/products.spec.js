import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login';
import { ProductsPage } from '../../pages/products';

test('add product to cart', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login('standard_user', 'secret_sauce');

    const productsPage = new ProductsPage(page);
    await productsPage.gotoProductsPage();
    await productsPage.addProductToCart('sauce-labs-backpack');
    await productsPage.removeProductFromCart('sauce-labs-backpack');
    await productsPage.goToCartAndRemove('sauce-labs-backpack');

});