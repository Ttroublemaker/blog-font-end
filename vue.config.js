const path = require('path')

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
  configureWebpack: {
    // 设置别名
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
  }
}