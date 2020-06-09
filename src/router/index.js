import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  /* {
    path: '/',
    name: 'Home',
    component: ()=> import('../views/Home.vue'),
  }, */
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/index.vue')
  },
  {
    path: '*',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/ant',
    name: 'ant',
    component: () => import('@views/ant.vue')
  },
  {
    path: '/time',
    name: 'time',
    component: () => import('@views/time.vue')
  },
  {
    path: '/grid',
    name: 'grid',
    component: () => import('@views/grid.vue')
  },
  {
    path: '/spin',
    name: 'spin',
    component: () => import('@views/spin.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
