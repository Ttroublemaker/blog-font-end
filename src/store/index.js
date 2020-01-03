import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
// import app from './modules/app'
// import permission from './modules/permission'
// import settings from './modules/settings'
// import user from './modules/user'

// 动态引入
const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = {}
modulesFiles.keys().forEach((key) => {
  const mod = modulesFiles(key)
  const modName = key.replace(/^\.\/(.*)\.\w+$/, '$1')
  modules[modName] = mod.__esModule && mod.default ? mod.default : mod
})

Vue.use(Vuex)

const store = new Vuex.Store({
  // modules: {
  //   app,
  //   permission,
  //   settings,
  //   user
  // },
  modules,
  getters
})

export default store
