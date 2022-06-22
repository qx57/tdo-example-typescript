import { Locator, Page } from "@playwright/test";

export class UserPage {

    readonly page: Page;
    readonly path: string = '/cabinet';
    readonly usernameCss: string = '#info > span.username';
    username: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = this.page.locator(this.usernameCss);
    }

    async getUsernameText() {
        return await this.username.innerText();
    }
}