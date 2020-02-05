import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/modules/auth'
import { resetRouter } from '@/router'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  // user login
  login ({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        const { data } = response
        // 由于采用session登录方案，故而无需在请求头带入token，在这里伪造一个token，用于标识是否登录成功，以便于前端路由跳转登录与否校验
        commit('SET_TOKEN', '当前用户已登录')
        setToken('当前用户已登录')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo ({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo().then(response => {
        const { data } = response
        console.log(data)
        if (!data) {
          reject('认证错误，请重新登录！')
        }

        const { roles, realname, avatar } = data

        if (!roles || roles.length <= 0) {
          reject('getInfo: roles不能为空！')
        }

        commit('SET_ROLES', roles)
        commit('SET_NAME', realname)
        commit('SET_AVATAR', avatar)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout ({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout().then(() => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        removeToken()
        resetRouter()//用constantRoutes重置路由
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken ({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

