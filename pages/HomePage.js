require('../util/customlocators.js')

var HomePage = function() {
    this.loginAsCustomer = function() {
        element(by.buttonText('Customer Login')).click();
    };

    this.loginAsBankManager = function() {
        element(by.ngClick("manager()")).click();
        return require('./AddCustomerDetails.js');
    };
};
module.exports = new HomePage();