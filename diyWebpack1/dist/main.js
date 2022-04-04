(function(graph){
        function require(module){
            function PathRequire(relativePath){
               return require(graph[module].dependencies[relativePath])
            }
            const exports = {};
            (function(require,exports,code){
               eval(code) 
            })(PathRequire,exports,graph[module].code)
            return exports;
        }
        require('./src/index.js')
    })({"./src/index.js":{"dependencies":{"./a.js":"./src/a.js"},"code":"\"use strict\";\n\nvar _a = require(\"./a.js\");\n\nconsole.log(\"hello \".concat(_a.str));"},"./src/a.js":{"dependencies":{"./b.js":"./src/b.js"},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.str = void 0;\n\nvar _b = require(\"./b.js\");\n\nvar str = \"webpack5 \".concat(_b.str2);\nexports.str = str;"},"./src/b.js":{"dependencies":{},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.str2 = void 0;\nvar str2 = \"!!!!\";\nexports.str2 = str2;"}})