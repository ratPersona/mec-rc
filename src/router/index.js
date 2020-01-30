import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../app/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/job-info',
    name: 'job-info',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../app/views/JobInfo.vue')
  },
  {
    path: '/schedule',
    name: 'schedule',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../app/views/Schedule.vue')
  },
  {
    path: '/runchart',
    name: 'runchart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../app/views/Runchart.vue')
  },
  {
    path: '/drawings',
    name: 'drawings',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../app/views/Drawings.vue')
  },
  {
    path: '/hanging',
    name: 'hanging',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../app/views/Hanging.vue')
  },
  {
    path: '/packaging',
    name: 'packaging',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../app/views/Packaging.vue')
  },
  {
    path: '/product-issue',
    name: 'product-isse',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../app/views/ProductIssue.vue')
  },
  {
    path: '/vpars',
    name: 'vpars',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../app/views/VPars.vue')
  },
  {
    path: '/assistance',
    name: 'assistance',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../app/views/GetAssistance.vue')
  },
  {
    path: '/timekeeping',
    name: 'timekeeping',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../app/views/Timekeeping.vue')
  },
  {
    path: '/material-request',
    name: 'material-request',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../app/views/MaterialRequest.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
