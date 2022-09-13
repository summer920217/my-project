import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component:()=>import('../views/index/Index.vue')
  },
  {
    path:'/category',
    component:()=>import('../views/category/Category.vue')
  },
  {
    path:'/vip',
    component:()=>import('../views/vip/Vip.vue')
  },
  {
    path:'/faxian',
    component:()=>import('../views/faxian/Faxian.vue')
  },
  {
    path:'/my',
    component:()=>import('../views/my/My.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
