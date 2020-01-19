import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/modules/auth'
import { baseURL } from '@/api/config'


const service = axios.create({
  baseURL: baseURL, // url = base url + request url
  timeout: 5000
})

// // 请求拦截
// service.interceptors.request.use(
//   config => {
//     if (store.getters.token) {
//       config.headers['Authorization'] = getToken()
//     }
//     return config
//   },
//   error => {
//     console.log(error) // for debug
//     return Promise.reject(error)
//   }
// )

// 响应拦截
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.errno === -1) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(new Error(res.message || 'Error'))
    } else if (res.errno === 0) {
      return Promise.resolve(res)
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)
export {
  service
}