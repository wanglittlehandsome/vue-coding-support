const path = require('path');
const debug = process.env.NODE_ENV !== 'production';
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  //  基本路径
  publicPath: '/',
  //  输出文件目录
  outputDir: 'dist',
  assetsDir: 'asserts', // 静态资源目录 (js, css, img, fonts)
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias // 添加别名
      .set('@', resolve('./src'))
      .set('@assets', resolve('./src/assets'))
      .set('@views', resolve('./src/views'))
      .set('@components', resolve('./src/components'));
  },
  configureWebpack: (config) => {// webpack配置，值位对象时会合并配置，为方法时会改写配置
    if (debug) { // 开发环境配置
      config.devtool = 'cheap-module-eval-source-map'
    } else { // 生产环境配置

    }
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?是否在构建样式地图，false将提高构建速度
    sourceMap: false,
  },
  // enabled by default if the machine has more than 1 cores 构建时开启多进程处理babel编译
  parallel: require('os').cpus().length > 1,
  // webpack-dev-server 相关配置
  devServer: {
    open: false,//  open 在devServer启动且第一次构建完成时，自动用我们的系统的默认浏览器去打开要开发的网页
    host: '0.0.0.0',
    port: 9001,
    https: false,
    hot: true,//  hot配置是否启用模块的热替换功能，devServer的默认行为是在发现源代码被变更后，通过自动刷新整个页面来做到事实预览，开启hot后，将在不刷新整个页面的情况下通过新模块替换老模块来做到实时预览。
    hotOnly: false/* eslint-disable */,
    proxy: null,
    before: app => {
    }
  },
  // 第三方插件配置
  pluginOptions: {
    // ...
    plugins: []

  }
};
