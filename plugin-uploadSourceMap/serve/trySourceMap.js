const fs = require("fs");
const sourceMap = require("source-map"); // mozilla/source-map库
class debugSourceMap {
  constructor(projectName, projectId, version, line, column) {
    this.projectName = projectName;
    this.projectId = projectId;
    this.version = version;
    this.line = line;
    this.column = column
  }
  async checkFun() {
    const rawSourceMap = JSON.parse(
      // 打包后的sourceMap文件"运营活动模块-0001/1.0.1"
      fs.readFileSync(`./${this.projectName}-${this.projectId}/${this.version}-index.js.map`).toString()
    );
    const consumer = await new sourceMap.SourceMapConsumer(rawSourceMap); // 获取sourceMap consumer，我们可以通过传入打包后的代码位置来查询源代码的位置
    const originalPosition = consumer.originalPositionFor({ // 获取 出错代码 在 哪一个源文件及其对应位置
      line: this.line,
      column: this.column,
    });
    // 根据源文件名寻找对应源文件
    const sourceIndex = consumer.sources.findIndex(
      (item) => item === originalPosition.source
    );
    const sourceContent = consumer.sourcesContent[sourceIndex];
    const contentRowArr = sourceContent.split("\n"); //切分
    // console.log('contentRowArr',contentRowArr);
    console.log(`项目名:${this.projectName}-id:${this.projectId}-版本:${this.version}-报错在源码的位置信息：`,originalPosition);
    // 接下来根据行和列可获取更加具体的位置
    console.log('具体在哪一行报错：',contentRowArr[originalPosition.line - 1]);
    // 使用完后记得destroy
    consumer.destroy(); 
  }
}

module.exports = debugSourceMap