/*function allure_report_jetty_deploy() {
    console.log('Generating allure reports from xml using maven plugin and deploying them on port:1234[localhost or jenkins node ip] via jetty server.It should not take more than 1 minute......');
    console.log('If at times there is some issue in report deployment or reports are not available on mentioned port, please restart jenkins master and re run the test build');

    var exec = require('child_process').exec;
exec("mvn site -Dallure.results_pattern=allure-results && mvn jetty:run -Djetty.port=1234", puts);
    var startTimes = Date.now();
    while (Date.now() - startTimes < 60000) {
    }
}

function send_mail() {
    console.log("Sending Mail with reports for t
    function puts(error, stdout, stderr) {
        sys.puts(stdout)
    }
   /* he test execution.");
    var sys = require('util')
    var exec = require('allure-results').exec;

    function puts(error, stdout, stderr) {
        sys.puts(stdout)
    }
    exec("node mail.js", puts);
}*/

exports.config = {
    directConnect: true,

    // Capabilities to be passed to the webdriver instance.
    multiCapabilities: [{
        'browserName': 'firefox'
    }],

    allScriptsTimeout: 50000,

    framework: 'jasmine2',
        suites: {
            all: ['./test_spec/BankManagerLoginTest.js','./test_spec/AddCustomerInfoTest.js'],
    },

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },

    onPrepare: function () {

        //browser.ignoreSynchronization=true;

        // Override the timeout for webdriver.
        browser.driver.manage().timeouts().implicitlyWait(10000);

        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: './allure-results'
        }));

        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter());
        jasmine.getEnv().afterEach(function(done){
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });

    },

   /* onComplete: function () {
       // allure_report_jetty_deploy();
        send_mail();
    },*/

    jasmineNodeOpts: {
        // onComplete will be called just before the driver quits.
        onComplete: null,
        // If true, display spec names.
        isVerbose: true,
        // If true, print colors to the terminal.
        showColors: true,
        // If true, include stack traces in failures.
        includeStackTrace: true,
        // Default time to wait in ms before a test fails.
        defaultTimeoutInterval: 30000
    }


}