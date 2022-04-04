const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config.js');
const path = require("path");
const compiler = Webpack(webpackConfig);
// https://webpack.docschina.org/configuration/dev-server/#root
// let devServer = {
//     static: {
//       directory: path.join(__dirname, 'dist'),
//     },
//     open: ['/pages'],
//     compress: true,
//     port: 9000,
//   };
const devServerOptions = { ...webpackConfig.devServer, open: true };
const server = new WebpackDevServer(devServerOptions, compiler);

const runServer = async () => {
  console.log('Starting server...');
  await server.start();
};

runServer();