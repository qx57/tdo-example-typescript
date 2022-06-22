import { expect } from "chai";
import { step } from "relax-steps-allure";
import { SigninPage } from "../tdo/ui/SigninPage";
import { UserPage } from "../tdo/ui/UserPage";
const data = require('./data/test.data.json').signin;

describe('Example for UI test', function (this: Mocha.Suite) {
    it('I can authorize into sign in form', async () => {
        const signinPage: SigninPage = new SigninPage(this.parent?.ctx.login_page);
        await step('load sign in page', async () => {
            await signinPage.load();
            expect(signinPage.getLoginField()).not.undefined;
            expect(signinPage.getPasswordField()).not.undefined;
            expect(signinPage.isSigninEnabled()).to.be.true;
        });
        await step('set login field', async () => {
            await signinPage.setLogin(data.login);
            expect(await signinPage.getLogin()).to.be.equal(data.login);
        });        
        await step('set apssword field', async () => {
            await signinPage.setPassword(data.password);
            expect(await signinPage.getPassword()).to.be.equal(data.password);
        });
        await step('send form', async () => {
            const userPage = new UserPage(await signinPage.signin());
            expect(userPage.getUsernameText()).to.be.equal(data.login);
        });
    });
});