describe("Adding Cusomer Information Test",function() {
    var basePage = require('../pages/BasePage.js');
    var OR = require('../json/OR.json')
	//var logger = require('../util/log.js');

    var add_customer = require('../pages/AddCustomerDetails.js');
    it("Adding Cusomer Information", function () {
        add_customer.gotoAddCustomer();
		//logger.log('info','Navigating to the Add Cusomer');
        add_customer.addCustomerInfo(OR.locators.addcustomerdetailspage.fName,OR.locators.addcustomerdetailspage.lName,OR.locators.addcustomerdetailspage.pCode);
    });

    //var add_customer = require('../pages/AddCustomerDetails.js');
    it("Open Account Information", function () {
        add_customer.gotoOpenAccount();
        add_customer.openAccount("Harry Potter","Dollar");
		//logger.log('info','Select a customer');
    });

});