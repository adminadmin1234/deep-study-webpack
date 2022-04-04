const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// 获取文件内容
const glob = require("glob");

//简单拼接一下入口|出口文件
const setOption = () => {
  const entry = {};
  const htmlwebpackplugins = [];

  const entryFiles = glob.sync(path.join(__dirname, "./src/pages/*/index.js"));

  entryFiles.map((item, index) => {
    const entryFile = entryFiles[index];
    const match = entryFile.match(/src\/(.*)\/index\.js$/);
    const pageName = match[1];
    entry[pageName] = entryFile;
    htmlwebpackplugins.push(
      new htmlWebpackPlugin({
        template: `./src/${pageName}/index.html`,
        filename: `${pageName}.html`,
        chunks: [pageName],
      })
    );
  });

  return {
    entry,
    htmlwebpackplugins,
  };
};
const { entry, htmlwebpackplugins } = setOption();

module.exports = {
  entry,
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
  },
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    open: ['/pages/index.html'],
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "less-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "images/",
            publicPath: "../images",
            limit: 1024 * 3, //阈值 超过阈值的图片会独立文件，没有超过会处理成base64
          },
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        // 提取公共的部分放到common.js文件
        commons: {
          name: 'common',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    ...htmlwebpackplugins,
    //css抽离
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    // 每次打包前将dist文件夹删掉
    new CleanWebpackPlugin(),
  ],
};
