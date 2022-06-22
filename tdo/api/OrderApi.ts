import { JsonRequest } from "http-req-builder";

const env = require('relax-env-json').getEnvironment();

export class OrderApi {
    
    readonly path: string = '/order_api';
    response: any;

    async changeStatus(
        order_id: number,
        new_status: string
    ) {
        this.response = await new JsonRequest()
            .url(env.host + this.path)
            .method('POST')
            .body({
                order_id: order_id,
                new_status: new_status
            })
            .send();
        return this.response;
    }

    getResponse() {
        return this.response;
    }
}