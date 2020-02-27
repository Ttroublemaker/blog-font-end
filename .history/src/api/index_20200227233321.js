import { service } from '@/utils/request'

export const login = (username, password) => service({
  method: 'POST',
  url: '/api/user/login',
  data: {
    username,
    password
  },
})

export const getBlogList = ({ keyword = '', recommend = '', classify = '全部', page_size = 10, currentPage = 1 } = {}) => service({
  method: 'GET',
  url: '/api/blog/list',
  params: {
    keyword,
    recommend,
    classify,
    page_size,
    currentPage
  }
})

export const getBlogDetail = (id) => service({
  method: 'GET',
  url: '/api/blog/detail',
  params: {
    id
  }
})

export const createNewBlog = ({ title, content, recommend, classify, recImg, subtitle }) => service({
  method: 'POST',
  url: '/api/blog/new',
  data: {
    title,
    content,
    recommend,
    classify,
    recImg,
    subtitle
  }
})

export const updateBlog = (id, { title, content, recommend, classify, subtitle }) => service({
  method: 'POST',
  url: '/api/blog/update?id=' + id,
  data: {
    title,
    content,
    recommend,
    classify, subtitle
  }
})

export const switchrecommend = (id, recommend) => service({
  method: 'POST',
  url: '/api/blog/switchRecommend',
  data: {
    id,
    recommend
  }
})

export const delBlog = (id) => service({
  method: 'POST',
  url: '/api/blog/del?id=' + id,
})

export const artClassify = () => service({
  method: 'GET',
  url: '/api/blog/artClassify'
})