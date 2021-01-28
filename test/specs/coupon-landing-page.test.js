
// Declare that this piece of Javascript need to use `CouponLandingPage`
const CouponLandingPage = require('./pageobjects/coupon-landing.page');

describe('My first real automated testing', () => {
    it('should open coupon setup landing page successfully', () => {

        // Given: Nil

        // When:
        CouponLandingPage.open();

        // Then:
        expect(browser).toHaveUrl(CouponLandingPage.url);
    });

    it('should contain correct heading', () => {

        // Given: Landing page has been loaded in previous step

        // When:
        var heading = CouponLandingPage.pageHeadingHyperlink;

        // Then:
        expect(heading).toExist();
        expect(heading).toBeVisible();
        expect(heading).toHaveText('CVRS Coupon Simulator')
    });

    it('should stop awhile so that I could look at final browser state', () => {

        // Given: Nil

        // When:
        browser.pause(5 * 1000);

        // Then: Nil
    });
});
