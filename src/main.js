import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI);
import 'normalize.css/normalize.css' //样式初始化
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
  error: '../public/images/error.PNG',
  loading: '../public/images/loadding.jpg'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')