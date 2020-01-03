// export default router
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 解决vue项目路由出现message: "Navigating to current location (XXX) is not allowed"的问题
// 原因：在路由中添加了相同的路由。
// 解决：重写路由的push方法
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

/* Layout */
import Layout from '@/layout'

/**
 * constantRoutes
 */
export const constantRoutes = [{
    path: '/login',
    component: () => import('@/views/login'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/Home1',
    name: 'Home',
    meta: {
      title: '博客',
      icon: 'dashboard'
    },
    children: [{
      path: 'Home1',
      name: 'Home1',
      component: () => import('@/views/home/home.vue'),
      meta: {
        title: '首页',
        icon: 'bokeblogger3'
      }
    }, {
      path: 'create',
      name: 'create',
      component: () => import('@/views/home/create.vue'),
      hidden: true,
      meta: {
        title: '新建',
        icon: 'xieboke',
      }
    }]
  },

  {
    path: '/form',
    component: Layout,
    // 如果只有一个子路径，则使用子路径的meta
    children: [{
      path: 'form',
      name: 'Form',
      component: () => import('@/views/Home'),
      meta: {
        title: 'Form',
        icon: 'form'
      }
    }]
  }
]

/**
 * asyncRoutes
 */
export const asyncRoutes = [{
    path: '/example',
    component: Layout,
    // 如果只有一个子路径，则使用子路径的meta
    children: [{
      path: 'example',
      name: 'Example',
      component: () => import('@/views/Home'),
      meta: {
        title: 'Example',
        icon: 'example'
      }
    }]
  },

  // 404 page must be placed at the end !!!
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router