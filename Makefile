test:
	@./node_modules/.bin/mocha -R xunit-file test/script.js

.PHONY: test
