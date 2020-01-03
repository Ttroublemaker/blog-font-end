import Cookies from 'js-cookie'//引入js-cookie
import { objAddToArr } from '@/utils/modules/auth'
const state = {
  // 控制侧边栏展开与否
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,//是否展开
    withoutAnimation: false//是否设置动画
  },
  navBarList: {
    lists: [{path: "/Home1",meta:{title: "Home",icon:'tree'}}],//默认页
    currentNavBarInd: 0
  } 
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 1)
    } else {
      Cookies.set('sidebarStatus', 0)
    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    Cookies.set('sidebarStatus', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  SET_NAVBAR_LIST: (state, {path,meta}) => {
    let obj = {path,meta}
    // 插入数据，并返回当前插入位置index
    let ind = objAddToArr(state.navBarList.lists,obj)
    state.navBarList.currentNavBarInd = ind
  },
  REMOVE_NAVBAR_ITEM: (state, ind) => {
    state.navBarList.lists.splice(ind,1)
  },
  SET_CURRENT_NAVBAR_IND:(state,ind) => {
    state.navBarList.currentNavBarInd = ind
  },
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation)
  },
  setNavBarList({ commit }, data){
    commit('SET_NAVBAR_LIST', data)
  }
}

export default {
  // 开启namespace:true，该模块就成为命名空间模块了
  namespaced: true,
  state,
  mutations,
  actions
}
