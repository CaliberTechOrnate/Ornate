//var logger = require('../util/log.js');


var BasePage = function() {
    this.navigateToURL = function(url) {
        browser.get(url);
		//logger.log('info','Navigating to the Website');
    };

    this.getPageTitle = function() {
      return browser.getTitle();
	  //logger.log('info','Get page title to the Website');
    };

};

module.exports = new BasePage();