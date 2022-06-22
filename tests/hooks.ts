import { Browser, chromium } from "@playwright/test";
import { AppDataSource } from "../dataSource";

// connect to DB
AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))

let browser: Browser;

export const mochaHooks = async (): Promise<Mocha.RootHookObject> => {
    return {
        async beforeAll(this: Mocha.Context) {
            // start the playwright context
            browser = await chromium.launch();
            const browser_context = await browser.newContext();
            const login_page = await browser_context.newPage();
            const order_page = await browser_context.newPage();

            const context = {
                browser: browser,
                login_page: login_page,
                order_page: order_page
            };
        
            Object.assign(this, context);
        },
        async afterAll(this: Mocha.Context) {
            browser.close();
        }
    }
}