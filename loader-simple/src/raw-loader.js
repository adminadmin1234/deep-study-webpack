const loaderUtils = require('loader-utils');
const fs = require('fs');
const path = require('path');

// loader其实就是一个函数入参是source出参也是一个source
module.exports = function(source) {
    // webpack默认会将当前的资源传进来
    // console.log('source',source);
    // 通过loader-utils组件可以获取到loader使用者的入参
    const { name } = loaderUtils.getOptions(this);
    // 获取资源名字
    const url = loaderUtils.interpolateName(this, "[name].[ext]", {
        source,
    });
    console.log('url',url);
    // 与loader-loader通信
    this.emitFile(path.join(__dirname, url), source);
    this.emitFile('dome.text', 'text1111');
    // webpack默认开启loader缓存，关掉可以设置false
    // this.cacheable(false);
    const callback = this.async();
    // console.log('name', name);

    // 对传进来的资源进行修改加工然后返回
    // const json = JSON.stringify(source)
    //     .replace('foo', '')
    //     .replace(/\u2028/g, '\\u2028')
    //     .replace(/\u2029/g, '\\u2029');
    // console.log('source',source);

    // 异步返回读取到的文件内容
    fs.readFile(path.join(__dirname, './async.txt'), 'utf-8', (err, data) => {
        if (err) {
            callback(err, '');
        }
        // 支持异步返回
        callback(null, data, null , null);
    });
    
    //支持同步返回
    // return `${json}`;
}