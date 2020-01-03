'use strict'

const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
const roles = {
  'admin-token': ['admin'],
  'editor-token': ['editor']
}

module.exports = {
  configureWebpack: {
    // 设置别名
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    // Mock Server简单的说就是起一个服务器，服务器提供接口产生相应的mock数据
    devServer: {
      before: function (app) { //直接用devserver这个服务
        // user login
        app.get('/user/login', (req, res) => {
          const { username,password }=req.query
          if (username == 'admin') {
            res.json({
              code: 20000,
              data: {
                token: Math.random() > 0.5 ? 'admin-token' : 'editor-token'
              }
            })
          } else {
            res.json({
              code: 50000,
              message:"用户名或密码出错！"
            })
          }

        })
        // getInfo
        app.post('/user/info', (req, res) => {
          res.json({
            code: 20000,
            data: {
              roles: roles['admin-token'], //['admin'] or ['editor']
              introduction: "I am a super administrator",
              avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
              name: "Super Admin"
            }
          })
        })
        app.post('/user/logout', (req, res) => {
          res.json({
            code: 20000,
            data: 'success'
          })
        })
      }
    }
  },
  chainWebpack(config) {
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