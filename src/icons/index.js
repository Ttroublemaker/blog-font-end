import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon' // svg component

// 全局注册svg-icon
Vue.component('svg-icon', SvgIcon)

// 自动引入svg
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)