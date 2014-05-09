test:
	@./node_modules/.bin/mocha -R xunit test/script.js > sample.xml

.PHONY: test
