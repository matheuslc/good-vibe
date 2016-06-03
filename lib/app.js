const espima = require('esprima');
const fs = require('fs');
const escodegen = require('escodegen');

fs.readFile('./lib/test.js', 'utf-8', (err, content) => {
	let AST = espima.parse(content);
	escodegen.generate(AST.body[0]);
});