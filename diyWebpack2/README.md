### 运行打包后的bundle
#### bundle简略代码
```
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({});
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/************************************************************************/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["common"], function() { return __webpack_require__("./src/pages/list/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ })()
;
```
##### 1.打包出来的是一个 IIFE (匿名闭包) 
##### 2.modules 是一个数组，每一项是一个模块初始化函数 
##### 3.__webpack_require 用来加载模块，返回 module.exports 
##### 4.通过 __webpack_require__.O() 启动程序

### 简单实现
##### 将 ES6 语法转换成 ES5 的语法
1.通过 babylon 生成AST 
2.通过 babel-core 将AST重新生成源码 
##### 可以分析模块之间的依赖关系
通过 babel-traverse 的 ImportDeclaration 方法获取依赖属性 
##### 生成的 JS 文件可以在浏览器中运行

### 运行
`
node lib/index.js
`