const Page = require('./page');

class RaceResultPage extends Page {
    
    open () {
        return super.open('https://racing.hkjc.com/racing/information/Chinese/Racing/LocalResults.aspx?RaceDate=2021/01/17');
    }
}

module.exports = new RaceResultPage();
