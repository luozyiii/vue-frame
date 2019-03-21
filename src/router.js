import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/examples/px2rem',
      name: 'px2rem',
      // route level code-splitting
      // this generates a separate chunk (px2rem.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "px2rem" */ './views/examples/px2rem/Px2rem.vue')
    },
    {
      path: '/examples/axios',
      name: 'axios',
      // route level code-splitting
      // this generates a separate chunk (axios.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "axios" */ './views/examples/axios/Axios.vue')
    }
  ]
})
