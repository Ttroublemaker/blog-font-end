// localStorage方法封装
export const setStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getStorage = (key) => {
  return localStorage.getItem(key) || ''
}

export const removeStorage = (key) => {
  if (!key) return
  return localStorage.removeItem(key)
}

/**
 * @param {Array} target 目标数组
 * @param {Array} arr 需要查询的数组
 * @description 判断要查询的数组是否至少有一个元素包含在目标数组中
 */
export const hasOneOf = (targetarr, arr) => {
  return targetarr.some(_ => arr.indexOf(_) > -1)
}

/**
 * @description 根据name/params/query判断两个路由对象是否相等
 * @param {*} route1 路由对象
 * @param {*} route2 路由对象
 */
export const routeEqual = (route1, route2) => {
  const params1 = route1.params || {}
  const params2 = route2.params || {}
  const query1 = route1.query || {}
  const query2 = route2.query || {}
  return (route1.name === route2.name) && objEqual(params1, params2) && objEqual(query1, query2)
}

/** 
 * @description 判断两个对象是否相等，这两个对象的值只能是数字或字符串
 * @param {*} obj1 对象
 * @param {*} obj2 对象
 */
export const objEqual = (obj1, obj2) => {
  const keysArr1 = Object.keys(obj1)
  const keysArr2 = Object.keys(obj2)
  if (keysArr1.length !== keysArr2.length) return false
  else if (keysArr1.length === 0 && keysArr2.length === 0) return true
  /* eslint-disable-next-line */
  else return !keysArr1.some(key => obj1[key] != obj2[key])
}

/**
 * @description 生成随机数
 * @param {*} lowerValue Number
 * @param {*} upperValue Number
 */
export const randomFrom = (lowerValue, upperValue) => {
  return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue)
}

/**
 *  @description 判断数据类型
 *  @param value any
 */
export const getType = (value) => {
  return Object.prototype.toString.call(value).slice(8, -1)
}

/**
 * @description 浅克隆
 * @param obj Object
 */
export const lightClone = (obj) => {
  return Object.assign({}, obj);
}

/**
 * @description 深度克隆
 * @param obj Object
 */
export const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj))
}
/**
 * @description 将一个值插入数组队列，并去重
 * @param arr Array 被插入队列
 * @param val  插入值 string number 
 */
export const addToArr = (arr, val) => {
  if (arr.indexOf(val) !== -1) {
    arr.splice(arr.indexOf(val), 1)
  }
  arr.push(val)
  return arr
}

