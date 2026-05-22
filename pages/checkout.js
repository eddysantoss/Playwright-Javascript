exports.CheckoutPage = class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.firstNameInput = page.locator('[data-test="firstName"]');
        this.lastNameInput = page.locator('[data-test="lastName"]');
        this.postalCodeInput = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');
        this.finishButton = page.locator('[data-test="finish"]');
        this.backToProductsButton = page.locator('[data-test="back-to-products"]');
        this.completeHeader = page.locator('.complete-header');
        this.inventoryList = page.locator('.inventory_list');
    }

    async startCheckout() {
        await this.page.click('button[data-test="checkout"]');
    }

    async fillCheckoutInformation(firstName, lastName, postalCode) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
    }

    async continueCheckout() {
        await this.continueButton.click();
    }

    async finishCheckout() {
        await this.finishButton.click();
    }

    async goBackToProducts() {
        await this.backToProductsButton.click();
    }
}