SHELL := /bin/bash

test:
	@mocha -R spec

hint:
	@jshint dif.js test.js package.json

# UglifyJS v1.3.4
min:
	@echo -n ';' > dif.min.js; uglifyjs -nc dif.js >> dif.min.js;

.PHONY: test hint min 