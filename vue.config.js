const path = require('path')
const CompressionPlugin = require("compression-webpack-plugin")
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        ws: true,
        changeOrigin: true,
      },
    }
  },
  // configureWebpack: {
  //   // 设置别名
  //   resolve: {
  //     alias: {
  //       '@': resolve('src')
  //     }
  //   },
  // },
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new CompressionPlugin({
            test: /\.js$|\.html$|.\css/, //匹配文件名
            threshold: 10240,//对超过10k的数据压缩
            deleteOriginalAssets: false //不删除源文件
          })
        ]
      }
    }
  }
}