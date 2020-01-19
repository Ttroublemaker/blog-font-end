import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式
import { getToken } from '@/utils/modules/auth' // get token from cookie
import getPageTitle from '@/utils/modules/getPageTitle'

NProgress.configure({
  showSpinner: false // NProgress Configuration,不显示进度条
})

const whiteList = ['/login'] // 路由白名单

// 路由拦截
router.beforeEach(async (to, from, next) => {

  NProgress.start()
  // 设置页面标题
  document.title = getPageTitle(to.meta.title)
  // 从cookie获取token
  const hasToken = getToken()
  console.log(hasToken)
  // 如果有token,表明登录成功
  if (hasToken) {
    if (to.path === '/login') {
      next({
        path: '/'
      })
      NProgress.done()
    } else {
      // 判断是否有权限列表（store中取，如果没有就从后台请求，如页面刷新，关闭，未登录过等）
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if (hasRoles) {
        // 如果有roles，直接跳转
        next()
      } else {
        try {
          // 如果store没有roles，则尝试请求获取用户roles信息
          const { roles } = await store.dispatch('user/getInfo')

          // 获取根据角色生成的路由
          const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
          // 动态添加路由
          router.addRoutes(accessRoutes)

          // hack方法 确保addRoutes已完成
          // set the replace: true, so the navigation will not leave a history record
          next({
            ...to,
            replace: true
          })
        } catch (error) {
          await store.dispatch('user/resetToken') //清空token
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`) //全部重定向到登录页
          NProgress.done()
        }
      }
    }
  } else {
    /* 没有token,去向是否在路由白名单*/
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})