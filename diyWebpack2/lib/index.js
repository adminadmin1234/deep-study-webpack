const Compiler = require('./compiler');


const options = require('../simplepack.config');
console.log('options',options);

new Compiler(options).run();