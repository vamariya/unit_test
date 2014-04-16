var path = require('path');
var fs = require('fs');
var argv = require('optimist').demand('config').argv;
var sum = require('../lib/test2');
var test1 = require('../lib/test1');
var setup = require('../lib/setup');
var assert = require("assert");
var config = argv.config;

describe("Mocha Framework Tests", function() {

/*************************************************
Common Setup Code Block
*************************************************/
	before("before Test:", function() {
		console.log("Common setup");
		console.log("Parse the Configuration File");
		assert.ok(fs.existsSync(config), 'config file not found at path: ' + config);
		console.log("Get the topo File path");
		setup.setup(config);
	});


/***************************************************
Test Setup Code Block
***************************************************/
	beforeEach("before each", function() {
	console.log("Test Setup");
	});

/***************************************************
Test Cases Code Block
***************************************************/
    it("Test1", function() 
	{
		var retval = sum(3,2);
		console.log("1. Test outcome " +retval);
		assert.equal(retval, "the sum is 5");		
	});

	it("Test sample', if passsed 'round'", function() {
			var retval = test1.display("oval");
			console.log("2. Test to check earth shape is " +retval);
		    assert.equal(retval, "the earth is oval");
	});

/****************************************************
Test Cleanup Code Block
****************************************************/
 	afterEach("after Each", function() {
         console.log("Test CleanUP");

	});

/****************************************************
Common Cleanup Code Block
****************************************************/
	after("at the end", function() {
		console.log("Common Cleanup");
	});

});
