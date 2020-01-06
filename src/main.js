import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css/normalize.css' //样式初始化
import '@/styles/index.scss' // 全局样式
import '@/icons' // icon
import '@/permission' // permission control
import UtilPlugin from '@/utils' //引入插件
Vue.config.productionTip = false
Vue.use(UtilPlugin)
Vue.prototype.$eventBus = new Vue() //尝试用eventBus控制自定义配置
// https://vue-particles.netlify.com/ 引入登录页背景动效
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// use
Vue.use(mavonEditor)

Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')