import { Locator, Page } from "@playwright/test";

const env = require('relax-env-json').getEnvironment();

export class OrderPage {

    readonly page: Page;
    readonly path: string = '/order_page';

    readonly statusCss = 'span#status';

    order_id: number | undefined;
    status: Locator | undefined;

    constructor(page: Page) {
        this.page = page;
    }

    async load(order_id: number) {
        this.order_id = order_id;
        await this.reload();
    }

    async getOrderStatus() {
        return await this.status?.innerText();
    }

    async reload() {
        await this.page.goto(env.host + this.path + `?order_id=${this.order_id}`);
        this.status = this.page.locator(this.statusCss);
    }
}