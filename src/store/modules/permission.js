import { asyncRoutes, constantRoutes } from '@/router'

/**
 * 根据权限列表，判断当前用户是否有权显示
 * @param roles // 权限列表
 * @param route // 路由列表
 */
// 是否有权限显示
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    return true
  }
}

/**
 * 递归筛选异步路由 res
 * @param routes asyncRoutes 异步路由
 * @param roles 权限列表
 */
export function filterAsyncRoutes(routes, roles) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route } // 确保是Object
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })
  return res
}

const state = {
  routes: [],   //所有路由
  addRoutes: [] //添加的异步路由
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  // 根据权限，生成路由
  generateRoutes({ commit }, roles) {
    return new Promise(resolve => {
      let accessedRoutes
      // 如果身份是admin，则拥有所有权限，否则根据权限生成动态路由
      if (roles.includes('admin')) {
        accessedRoutes = asyncRoutes || []
        // console.log("accessedRoutes",accessedRoutes)
      } else {
        accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
      }
      commit('SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)//返回匹配后的异步路由
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
