const glob = require('glob')
const path = require('path')
const fs = require('fs')
const axios = require('axios')
const FormData =require('form-data');

class UploadSourceMapWebPlugin {
  constructor (options) {
    this.options = options
  }
  apply(compiler) {
    console.log('uploadSourceMapWebPlugin apply')
    compiler.hooks.done.tapAsync('upload-sourcemap-plugin', async status => {
      // 自动读取文件路径
      const list = glob.sync(path.join(status.compilation.outputOptions.path, `./**/*.{js.map,}`))
      console.log('list',list)
      for (let file of list) {
        try {
          await this.upload(this.options.uploadUrl, file);
          console.log('source map 上传完成');
          this.deleteFile(file);
        } catch (err) {
          console.log('errerrerr')
        }
      }
      process.exit()
    })
  }
  upload (url, file) {
     return new Promise(resolve => {
      // const contentText = fs.readFileSync(file, 'utf-8')
      let contentText = fs.createReadStream(file) 
      const fileName = path.basename(file)
      const formData = new FormData();
      const dataTime = new Date().getTime();
      console.log(`${this.options.projectName}-${this.options.projectId}`,`${dataTime}-${fileName}`)
      formData.append('fileName', `${this.options.version}-${fileName}`);
      formData.append('dirName', `${this.options.projectName}-${this.options.projectId}`);
      formData.append('file', contentText);
      if(fs.existsSync(file)) {
        axios.post(url,
        formData, 
        { headers: formData.getHeaders() })
        .then((res) => {
          console.log('res111',res.data);
          resolve()
        }).catch((err) => {
          console.log('errerrerrerr12')
        })
      }
    })
  }
  deleteFile(filePath) {
    if(fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`${filePath} 已经删除`);
    }
  }
}

module.exports = UploadSourceMapWebPlugin