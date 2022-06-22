import { expect } from "chai";
import { step } from "relax-steps-allure";
import { OrderApi } from "../tdo/api/OrderApi";
import { OrderDB } from "../tdo/db/OrderDB";
const data = require('./data/test.data.json').order;

describe('Example for API + DB test', async () => {
    it('I can change status through API', async () => {
        const orderDb = await OrderDB.findOneBy({ id: data.order_id});
        await step('Check order status in DB', async () => {            
            expect(orderDb?.status).to.be.equal(data.start_status);
        });
        await step('Change order status through API', async () => {
            const orderApi = new OrderApi();
            orderApi.changeStatus(data.order_id, data.new_status);
            expect(orderApi.response.statusCode).to.be.equal(200);
            expect(orderApi.response.body.status).to.be.equal(data.new_status);
        });
        await step('Check order status in DB again', async () => {
            orderDb?.reload();
            expect(orderDb?.status).to.be.equal(data.new_status);
        });
    });
});