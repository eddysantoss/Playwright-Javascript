import { expect } from '@playwright/test';

exports.LogoutPage = class LogoutPage {
    constructor(page) {

        this.page = page;

    }

    async clickLogoutButton() {
        await this.page.click('#react-burger-menu-btn');
        await this.page.click('#logout_sidebar_link');
    }
}