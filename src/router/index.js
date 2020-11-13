import Vue from 'vue'
import VueRouter from 'vue-router'
import { VIEW } from '../constants/globals'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: VIEW.home,
    component: () => import('../views/Home.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
