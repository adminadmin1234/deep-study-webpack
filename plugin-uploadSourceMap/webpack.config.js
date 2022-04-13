const path = require('path');
const UploadSourceMapWebpackPlugin = require('./plugin/uploadSourceMapWebPlugin.js');
const webpack = require('webpack')

let config = {
  entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'index.js'
    },
    devtool: 'source-map',
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        port: 8080,
      },
    mode: 'production'
}
module.exports = (env)=>{
  if(env.mode == 'production') {
    console.log('productionproductionproductionproduction')
    config.plugins = [
      // 初始化插件
      new UploadSourceMapWebpackPlugin({
        projectId: '0002',
        projectName: '运营活动模块',
        version:'1.0.1',
        // uploadUrl: '' //真实地址
        uploadUrl: 'http://localhost:3030/uploadFile' //本地服务调试地址
      })
    ]
  }
  return config;
}