import { service } from '@/utils/request'

export const login = ({ username, password }) => service({
  method: 'POST',
  url: '/api/user/login',
  data: {
    username,
    password
  },
})

export const getInfo = () => service({
  method: 'GET',
  url: '/api/user/getInfo'
})

export const logout = () => service({
  method: 'POST',
  url: '/api/user/loginOut'
})
