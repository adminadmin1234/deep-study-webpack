### 安装依赖
`npm install`
### 运行
根目录：`node bundle.js`
会在dist下生成打包后的文件

### 关键技术点
#### 1.确定入口
1.1.解析入口文件，识别入口文件是否有依赖，递归收集依赖，并保存文件(主体代码)到code字段中,(这一部分主要用到：fs读取文件之后再转ast读内容)
#### 2.整理依赖图谱-modules对象
2.1将所有的依赖关系(配置文件路径)都填进一个对象dependencies中{"./a.js":"./src/a.js"}
2.1将ast转成的js代码填进code字段中
#### 3.生成可以执行的js字符串
3.1利用闭包、eval、递归等方式实现
#### 4.输出文件到出口fs.writeFileSync();