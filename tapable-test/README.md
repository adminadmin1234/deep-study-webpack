### 前言
Webpack 本质上是一种事件流的机制，它的工作流程就是将各个插件串联起来，而实现这一切的核心就是 Tapable，Webpack 中最核心的负责编译的 Compiler 和负责创建 bundles 的 Compilation 都是 Tapable 的子类，并且实例内部的生命周期也是通过 Tapable 库提供的钩子类实现的
`
// webpack5.71.0源码下
// webpack/lib/Compiler.js
const {
	SyncHook,
	SyncBailHook,
	AsyncParallelHook,
	AsyncSeriesHook
} = require("tapable");

// webpack/lib/Compilation.js
const {
	HookMap,
	SyncHook,
	SyncBailHook,
	SyncWaterfallHook,
	AsyncSeriesHook,
	AsyncSeriesBailHook,
	AsyncParallelHook
} = require("tapable");
`

### Tapable 是什么？
#### 简介
我们知道 Node.js 的特点是事件驱动，它是通过内部的 EventEmitter 类实现的，这个类能够进行事件的监听与触发。
Tapable 的功能与 EventEmitter 类似，但是更加强大，它包含了多种不同的监听和触发事件的方式。

#### 总结
简单的说Tapable提供了一个强大的发布-订阅模式

### 案例-代码中有两个案例
#### 案例1-简单的Tapable官网案例:
1.安装node_modules
2.运行
`node demo.js`
#### 案例2-基于Tapable的简单webpack plugin模拟开发:
1.安装node_modules
2.运行
`node mockPlugin.js`