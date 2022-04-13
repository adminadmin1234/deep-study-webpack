### 项目介绍
#### 1.前端质量/报错监控系统整体思路实现逻辑
#### 2.开发一个webpack plugin插件收集使用者的sourcemap到云端
#### 3.使用者初始化报错系统的sdk，然后运行，报错时收集错误上报云端
#### 4.云端根据收集到的报错信息及之前拿到的sourcemap进行解析，确认报错位置

### 开发环境
nodejs v14.17.6

### 安装依赖
```
npm install
```

### 运行项目
#### 1.运行服务端：
```
// 在plugin-uploadSourceMap\serve目录下
node .\index.js
```
打印：服务器运行在3030

#### 2.收集项目sourceMap
```
// 在根目录
npm run build
```
打印：source map 上传完成
#### 3.开启服务运行线上项目
```
// 在根目录
npm run dev
```
然后在浏览器打开：http://localhost:8080/
之后第一步运行的服务端会有错误打印：
```
项目名:运营活动模块-id:0002-版本:1.0.1-报错在源码的位置信息： {
  source: 'webpack://plugin-uploadsourcemap/src/index.js',
  line: 3,
  column: 3,
  name: 'f'
}
具体在哪一行报错： if(f){1234}
```