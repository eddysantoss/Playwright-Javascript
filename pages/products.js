import { expect } from '@playwright/test';

exports.ProductsPage = class ProductsPage {
    constructor(page) {

        this.page = page;
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.cartLink = page.locator('[data-test="shopping-cart-link"]');

    }

    async gotoProductsPage() {
        await this.page.goto('https://www.saucedemo.com/inventory.html');
    }

    async addProductToCart(productName) {
        await this.page.click(`button[data-test="add-to-cart-${productName}"]`);
        await expect(this.cartBadge).toHaveText('1');
    }

    async removeProductFromCart(productName) {
        await this.page.click(`button[data-test="remove-${productName}"]`);
        await expect(this.cartBadge).toHaveCount(0);
    }

    async goToCart() {
        await this.cartLink.click();
    }

    async goToCartAndRemove(productName) {
        await this.page.click(`button[data-test="add-to-cart-${productName}"]`);
        await this.cartLink.click();
        await this.removeProductFromCart(productName);
        await expect(this.cartBadge).toHaveCount(0);

    }
}