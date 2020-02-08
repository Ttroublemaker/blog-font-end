'use strict'

const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}
const roles = {
  'admin-token': ['admin'],
  'editor-token': ['editor']
}

module.exports = {
  devServer: {
    port: 8081,
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
  },
  chainWebpack (config) {
    // set svg-sprite-loader,特别注意要引入svg-sprite-loader插件
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },

}