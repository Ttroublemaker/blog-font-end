import Cookies from 'js-cookie'
import {
  objEqual
} from './common'
const TokenKey = 'vue_admin_template_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
/**
 * @description 将一个对象插入数组队列，并去重，且最多保留最新的maxLen个数据
 * @param arr Array 被插入队列
 * @param obj  插入值 Object
 */
export const objAddToArr = (arr, obj) => {
  arr.forEach((val, ind) => {
    if (objEqual(val, obj)) {
      arr.splice(ind, 1)
    }
  })
  // 当前点击页是默认首页就不插入队列
  if (_isDefaultPage(arr, obj)) return 0
  // 保留最新的maxLen个数据
  if (_isExtendedMaxLen(arr, 10)) {
    arr.splice(2, 1)
  }
  arr.push(obj)
  return arr.length - 1
}
// 是否首页
const _isDefaultPage = (arr, obj) => {
  if (arr[0].path == obj.path) {
    return true
  }
  return false
}
// 是否超过最大允许长度
const _isExtendedMaxLen = (arr, maxLen) => {
  if (arr.length >= maxLen) {
    return true
  }
  return false
}