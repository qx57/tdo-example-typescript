import { expect } from "chai";
import { step } from "relax-steps-allure";
import { OrderApi } from "../tdo/api/OrderApi";
import { OrderPage } from "../tdo/ui/OrderPage";
const data = require('./data/test.data.json').order;

describe('Example for UI + API test', function (this: Mocha.Suite) {
    it('I can view status changing', async () => {
        const orderPage = new OrderPage(this.parent?.ctx.order_page);
        await step('open order page', async () => {
            await orderPage.load(data.order_id);
            expect(await orderPage.getOrderStatus()).to.be.equal(data.start_status);
        });
        await step('change order status through API', async () => {
            const orderApi = new OrderApi();
            const response = await orderApi.changeStatus(data.order_id, data.new_status);
            expect(response.statusCode).to.be.equal(200);
            expect(response.body.status).to.be.equal(data.new_status);
        });
        await step('reload page and check status', async () => {
            await orderPage.reload();
            expect(await orderPage.getOrderStatus()).to.be.equal(data.new_status);
        });
    });
});