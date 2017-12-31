var SelectWrapper = require('../util/select-wrapper.js');
var mySelect = new SelectWrapper(by.id("userSelect"));
var myCurrency = new SelectWrapper(by.id("currency"));
var locator = require('../util/customlocators.js');
var OR = require('../json/OR.json');

var AddCustomerDetails = function() {
    this.gotoAddCustomer = function() {
        element(by.ngClick(OR.locators.addcustomerdetailspage.addcustomerbutton)).click();
        return this;
    };

    this.gotoOpenAccount = function() {
        element(by.ngClick('openAccount()')).click();
        return this;
    };

    this.gotoSearchCustomer = function() {
        element(by.buttonText('Customers')).click();
        return this;
    };

    this.addCustomerInfo = function(fName,lName,postCode) {
        element(by.model('fName')).sendKeys(fName);
        element(by.model('lName')).sendKeys(lName);
        element(by.model('postCd')).sendKeys(postCode);
        element(by.css('.btn.btn-default')).click();
        browser.sleep(2000);

        var alertDialog =  browser.switchTo().alert();
        alertDialog.getText().then(function(text) {
            console.log(text);
        });
        alertDialog.accept();
        browser.sleep(2000);
        return this;

    };

    this.openAccount = function(name,currency) {
        mySelect.selectByText(name);
        myCurrency.selectByText(currency);
        element(by.buttonText('Process')).click();

        var alertDialog =  browser.switchTo().alert();
        alertDialog.getText().then(function(text) {
            console.log(text);
        });
        alertDialog.accept();
        browser.sleep(2000);
        return this;
    };

    this.validateCustomerRecord = function(searchText) {
        element(by.model("searchCustomer")).sendKeys(searchText);

        var firstName = element(by.repeater("cust in Customers").row(0).column("cust.fName"));

        firstName.getText().then(function(text) {
            console.log(text);
        });
        expect(firstName.getText()).toEqual("Harry");
        browser.sleep(2000);
        return this;
    };

};

module.exports = new AddCustomerDetails();