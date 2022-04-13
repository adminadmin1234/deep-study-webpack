const path = require('path');
let config = {
  devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      port: 8080,
    },
}
module.exports = (env)=>{
  return config;
}