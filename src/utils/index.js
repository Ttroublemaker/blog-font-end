// 自动引入
const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = {}
modulesFiles.keys().forEach((key) => {
  const mod = modulesFiles(key)
  const modName = key.replace(/^\.\/(.*)\.\w+$/, '$1')
  modules[modName] = mod.__esModule && mod.default ? mod.default : mod
})


const UtilPlugin={}

UtilPlugin.install=function(Vue,options){//插件必须有install方法，接受两个参数，一个是Vue构造器,一个是参数
  Vue.prototype.$util = modules//在vue prototype上添加实例方法
}
export default UtilPlugin

