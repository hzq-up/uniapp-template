const path = require('path');
// vue.config.js，如没有此文件则手动创建
module.exports = {
  transpileDependencies: ['uview-ui'],
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.join(__dirname, 'src'))
  },
}