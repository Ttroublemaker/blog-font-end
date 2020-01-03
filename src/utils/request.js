import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/modules/auth'
import { baseURL } from '@/api/config'


const service = axios.create({
  baseURL: baseURL, // url = base url + request url
  timeout: 5000  
})

// 请求方法request
const request = (url, data, method, isDownExcel = false) => {

  if (isDownExcel){
    return service({
      url,
      data,
      method:'POST',
      responseType: 'blob'//下载Excel需要加上{responseType: 'blob'}
    })
  }else{
    return service({
      url,
      data,
      method
    })
  }
}


// 请求拦截
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
    config.headers['Authorization'] = getToken()
    }
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  response => {
    const res = response.data
    // 返回的code不是20000，就标识为错误（与后台协商）
    if (res.code !== 20000) {
    Message({
      message: res.message || 'Error',
      type: 'error',
      duration: 5 * 1000
    })
    // 50008: 不合法的 token; 50012: 已有其他客户端登录; 50014: Token 过期;
    if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      // 重新登录
      MessageBox.confirm('您已退出，请确认是否重新登录？', '退出确认', {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        store.dispatch('user/resetToken').then(() => {
          location.reload() // 为了重新实例化vue-router对象 避免bug
        })
      })
    }
    return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
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
/**
  * 下载文件
  * @param {*} data   数据流 Blob对象存储 Blob {size: 4880, type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}
  * @param {*} name   文件名
  */
 function _downloadExcel(data,name) {
   
  if(!data){
      return
  }
  // https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader
  if(data.type == 'application/json'){//判断是否返回的是json(报错信息)
     var reader = new FileReader();
     reader.readAsText(data,['utf-8']);
     reader.addEventListener("load", function() {
       var jsonRequest = JSON.parse(reader.result)
       Message({
         showClose: true,
         type: 'error',
         message: jsonRequest.msg || '返回数据格式出错'
       })
     });
     return
   }
  //  https://www.cnblogs.com/sunweinan/p/excel.html
  var date = new Date()
  var blob = new Blob([data], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'})
   // debugger
  var url = window.URL.createObjectURL(blob);
  var aLink = document.createElement("a");
  aLink.style.display = "none";
  aLink.href = url;
  aLink.setAttribute("download", name+'_'+date.getFullYear()+'-'+(date.getMonth()+1)+'-'+
          date.getDate()+'-'+date.getHours()+'-'+date.getMinutes()+'-'+date.getSeconds()+'.xls');
  document.body.appendChild(aLink);
  aLink.click();
   setTimeout(() =>{
     document.body.removeChild(aLink); //下载完成移除元素
     window.URL.revokeObjectURL(url); //释放掉blob对象
   },100)
}

export {
  request,
  _downloadExcel
}