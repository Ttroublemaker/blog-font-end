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
})

export const getBlogList = ({ keyword = '', recommend = '', page_size = 10, page_count = 1 } = {}) => service({
  method: 'GET',
  url: '/api/blog/list',
  params: {
    keyword,
    recommend,
    page_size,
    page_count
  }
})

export const getBlogDetail = (id) => service({
  method: 'GET',
  url: '/api/blog/detail',
  params: {
    id
  }
})

export const createNewBlog = ({ title, content, recommend, classify }) => service({
  method: 'POST',
  url: '/api/blog/new',
  data: {
    title,
    content,
    recommend,
    classify
  }
})

export const updateBlog = (id, { title, content, recommend, classify }) => service({
  method: 'POST',
  url: '/api/blog/update?id=' + id,
  data: {
    title,
    content,
    recommend,
    classify
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