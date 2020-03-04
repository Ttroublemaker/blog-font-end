import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../layout/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'default',
    redirect: '/home',
    component: Main,
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('../views/Home/Home.vue')
      },
      {
        path: 'blog',
        name: 'blog',
        component: () => import('../views/Blog/Blog.vue'),
      },
      {
        path: 'blog-detail',
        name: 'blog-detail',
        component: () => import('../views/Blog/Detail.vue'),
      },
      {
        path: 'personal',
        name: 'personal',
        component: () => import('../views/Personal/Personal.vue')
      },
      {
        path: '*',
        name: '*',
        redirect: '/home',
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router