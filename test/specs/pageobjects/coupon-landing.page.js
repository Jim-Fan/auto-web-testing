
// Define a new "class" to model our coupon simulator landing page
class CouponLandingPage {

    //------------- Constructor -------------
    constructor() {
        // Nothing to initialise
    }

    
    //------------- Put getters here -------------
    get url() { return 'https://128.128.20.240:9443/'; }
    get pageHeadingHyperlink() { return browser.$('body > header > nav > a'); }


    //------------- Put functions here -------------
    open() {
        browser.url(this.url);
    }
}

// Export this class definition, so that rest of the programme can see/use
module.exports = new CouponLandingPage();