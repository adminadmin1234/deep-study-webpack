// https://parse5.js.org/modules/parse5.html
const parse5 = require('parse5')
const FUNC_START = '#####FUN_S#####'
const FUNC_START_REG = new RegExp('["\']' + FUNC_START, 'g')
const FUNC_END = '#####FUN_E#####'
const FUNC_END_REG = new RegExp(FUNC_END + '["\']', 'g')
function parseTemplate (source, resourcePath) {
    return new Promise((resolve, reject) => {
      parse(source, (err, obj) => {
        if (err) {
          reject(err)
        }
        else {
          // 需要将返回来的obj对象进行处理-十分复杂
          // console.log('parseTemplate obj', obj.childNodes);
          // 我就不处理了直接mock，方便看结果
          let mock = {
            "attr": {
              "debugLine": "common/component/comp/index:1",
              "className": "item"
            },
            "type": "div",
            "classList": [
              "item"
            ],
            "children": [
              {
                "attr": {
                  "debugLine": "common/component/comp/index:2",
                  "className": "text-style",
                  "value": "点击这里查看隐藏文本"
                },
                "type": "text",
                "classList": [
                  "text-style"
                ],
                "events": {
                  "click": "childClicked"
                }
              },
              {
                "attr": {
                  "debugLine": "common/component/comp/index:3",
                  "className": "text-style",
                  "value": "hello world123"
                },
                "type": "text",
                "classList": [
                  "text-style"
                ],
                "shown": function () {return this.showObj}
              }
            ]
          };
          // 防止函数解析失败所以加了转换
          let parsed = JSON.stringify(mock, stringifyFunction, '  ');
          console.log('parseTemplate parsed', parsed);
          parsed = parsed.replace(FUNC_START_REG, '').replace(FUNC_END_REG, '')
          resolve({ parsed })
        }
      }, resourcePath)
    })
  }
module.exports = {
    parseTemplate: parseTemplate,
}
function parse(source, operate, filePath) {
    const document = parse5.parseFragment(source);
    operate(null, document)
  }
function stringifyFunction (key, value) {
    if (typeof value === 'function') {
      return FUNC_START + value.toString() + FUNC_END
    }
    return value
  }