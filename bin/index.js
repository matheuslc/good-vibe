#!/usr/bin/env node

const commander = require('commander');
const thryoada = require('./lib/main');

/**
 * CLI options
 **/
commander.option('-d, --dictionary', 'Choose your dictionary')
	.option('-p, --path', 'What\'s your code path?')
	.parse(process.argv);

vibe(commander.dictionary, commander.path);