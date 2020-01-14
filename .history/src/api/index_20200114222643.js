import {
  service
} from './request'

export const login = (username, password) => service({
  method: 'POST',
  url: '/api/user/login',
  data: {
    username,
    password
  },
  // headers: {
  //     'Content-Type': 'application/json', //这里以json的格式上传文件,不然用post时body为{}
  // }
});
export const loginTest = () => service({
  method: 'GET',
  url: '/api/user/login-test',
});