//1-引入express框架
const express = require('express') ;
// https://www.npmjs.com/package/multiparty
const multiparty = require('multiparty')
var bodyParser = require('body-parser')
const fs = require('fs')
const path = require('path')
const debugSourceMap = require('./trySourceMap')
// 2-创建网站服务
const app = express() ;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//设置跨域访问
app.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
  // console.log(' 置跨域访问设置跨域访问设置跨域访问')
});
// 3-接收请求
app.get('/',(req,res)=>{
    // console.log(req);
    res.send('<h2>你好</h2>') ;
})
app.post("/uploadMsg",  function (req, res) {
  // console.log('uploadMsg req.body',req.body);
  let {projectName, projectId, version} = req.body;
  let {line, col} = req.body.errorMsg;
  let debugObj =  new debugSourceMap(projectName, projectId, version, line, col)
  debugObj.checkFun()
});
app.post("/uploadFile",  function (req, res) {
    /* 生成multiparty对象，并配置上传目标路径 */
    let form = new multiparty.Form();
    // 设置编码
    form.encoding = 'utf-8';
    // 设置文件大小限制
    // form.maxFilesSize = 1 * 1024 * 1024;
    // console.log('req2222',req)
    // 设置文件存储路径，以当前编辑的文件为相对路径
    form.uploadDir = `./tempSourceMap`;
    form.parse(req, function (err, fields, files) {
      try {
        console.log('files', files);
        console.log('fields', fields);
        let inputFile = files.file && files.file[0];
        let newPath = form.uploadDir + "/" + fields.fileName[0];
        // 同步重命名文件名 fs.renameSync(oldPath, newPath)
        //oldPath  不得作更改，使用默认上传路径就好
        console.log(inputFile.path, newPath);
        fs.renameSync(inputFile.path, newPath);
        // 文件转移
        let dirNameNew = path.resolve(__dirname, fields.dirName[0]);
        let dirNameOld = path.resolve(__dirname,'tempSourceMap' ,fields.fileName[0]);
        if (!fs.existsSync(dirNameNew)) {
            fs.mkdirSync(dirNameNew);
        }
        console.log('准备写入到新目录下')
        // 写入到新目录下
        let newFile = `${dirNameNew}\\${fields.fileName[0]}`;
        var data = fs.copyFileSync(dirNameOld, newFile);
        console.log('data',data)
        // 并且删除原文件
        fs.unlinkSync(dirNameOld);
        console.log('上传成功！');
        res.send({ code: 0, data: "上传成功！" });
      } catch (err) {
        console.log('上传失败！');
        res.send({code: -1, data: "上传失败！" });
      };
    })
  });

// 4-监听端口
app.listen(3030,function(){
    console.log('服务器运行在3030')
})