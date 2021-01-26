const RaceResultPage = require('./pageobjects/race-result.page');

describe('My first automated testing', () => {
    it('should open Jockey Club website successfully', () => {

        RaceResultPage.open();
        browser.pause(5 * 1000);
    });
});
