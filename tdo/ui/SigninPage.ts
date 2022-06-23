import { Locator, Page } from "@playwright/test";
const env = require('relax-env-json').getEnvironment();

export class SigninPage {

    readonly page: Page;
    readonly path: string = '/login';

    readonly loginCss: string = '#login';
    readonly passwordCss: string = '#password';
    readonly buttonCss: string = 'form.signin input[type=submit]';

    loginField: Locator | undefined;
    passwordField: Locator | undefined;
    signinButton: Locator | undefined;

    constructor(page: Page) {
        this.page = page;
    }

    async load() {
        await this.page.goto(env.host + this.path);
        this.loginField = this.page.locator(this.loginCss);
        this.passwordField = this.page.locator(this.passwordCss);
        this.signinButton = this.page.locator(this.buttonCss);
    }

    getLoginField() {
        return this.loginField;
    }

    getPasswordField() {
        return this.passwordField;
    }

    isSigninEnabled() {
        return this.signinButton != undefined;
    }

    async setLogin(value: string) {
        await this.loginField?.fill(value);
    }

    async getLogin() {
        return await this.loginField?.inputValue();
    }

    async setPassword(value: string) {
        await this.passwordField?.fill(value);
    }

    async getPassword() {
        return await this.passwordField?.inputValue();
    }

    async signin() {
        await this.signinButton?.click();
        return this.page;
    }
}

function networkidle(arg0: string, networkidle: any) {
    throw new Error("Function not implemented.");
}
