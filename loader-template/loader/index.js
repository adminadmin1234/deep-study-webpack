const loaderUtils = require('loader-utils');
const fs = require('fs');
const path = require('path');
const { parseTemplate } = require('./utils.js');
module.exports = function(source) {
    this.cacheable(false);
    const callback = this.async();
    parseTemplate(source, this.resourcePath)
    .then(({ parsed }) => {
      callback(null, `module.exports = ${parsed}`)
    }).catch(e => {
      console.log('ERROR: Failed to parse the file. ' , e)
      callback('')
    })
}