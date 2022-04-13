/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.xxx":
/*!***********************!*\
  !*** ./src/index.xxx ***!
  \***********************/
/***/ ((module) => {

eval("module.exports = {\n  \"attr\": {\n    \"debugLine\": \"common/component/comp/index:1\",\n    \"className\": \"item\"\n  },\n  \"type\": \"div\",\n  \"classList\": [\n    \"item\"\n  ],\n  \"children\": [\n    {\n      \"attr\": {\n        \"debugLine\": \"common/component/comp/index:2\",\n        \"className\": \"text-style\",\n        \"value\": \"点击这里查看隐藏文本\"\n      },\n      \"type\": \"text\",\n      \"classList\": [\n        \"text-style\"\n      ],\n      \"events\": {\n        \"click\": \"childClicked\"\n      }\n    },\n    {\n      \"attr\": {\n        \"debugLine\": \"common/component/comp/index:3\",\n        \"className\": \"text-style\",\n        \"value\": \"hello world123\"\n      },\n      \"type\": \"text\",\n      \"classList\": [\n        \"text-style\"\n      ],\n      \"shown\": function () {return this.showObj}\n    }\n  ]\n}\n\n//# sourceURL=webpack://loader-template/./src/index.xxx?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.xxx");
/******/ 	
/******/ })()
;