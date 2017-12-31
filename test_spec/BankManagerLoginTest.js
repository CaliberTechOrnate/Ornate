describe("BankManager logging Test",function() {
    var homePage = require('../pages/HomePage.js');
    var basePage = require('../pages/BasePage.js');
    var OR = require('../json/OR.json');


    it("Bank Manager Login test", function () {
        basePage.navigateToURL(OR.testsiteurl);
        homePage.loginAsBankManager();
        var title = basePage.getPageTitle();
        expect(title).toBe("Protractor practice website - Banking App");
        browser.sleep(2000);
    });
});