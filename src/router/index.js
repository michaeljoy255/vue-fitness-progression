import Vue from 'vue'
import VueRouter from 'vue-router'
import { LAYOUT, VIEW } from '../constants/globals'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/dashboard',
    name: VIEW.dashboard,
    component: () => import('../views/Dashboard.vue'),
  },
  {
    path: '/active-workout/:id',
    name: VIEW.activeWorkout,
    meta: { layout: LAYOUT.workout },
    component: () => import('../views/ActiveWorkout.vue'),
  },
  {
    path: '/test',
    name: VIEW.test,
    component: () => import('../views/Test.vue'),
  },
  {
    path: '*', // 404
    name: VIEW.notFound,
    component: () => import('../views/NotFound.vue'),
  },
]

const router = new VueRouter({
  routes,
})

export default router
