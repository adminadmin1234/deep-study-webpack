const { runLoaders } = require('loader-runner');
const fs = require('fs');
const path = require('path');

runLoaders({
    resource: path.join(__dirname, './src/demo.txt'),
    loaders: [
        {
            loader: path.join(__dirname, './src/raw-loader.js'),
            options: {
                name: 'test'
            }
        }
    ],
    context: {
        emitFile: (...args) => {
            console.log('loader-runner中获取loader发出的emit',args)
        }
    },
    readResource: fs.readFile.bind(fs)
}, (err, result) => {
    // 打印一下loader返回的结果
    err ? console.log(err) : console.log('loader-runner里面打印一下loader返回的结果:',result);
});