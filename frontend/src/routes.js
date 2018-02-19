import Vue from 'vue'
import Router from 'vue-router'

import Login from './components/auth/Login.vue'
import Register from './components/auth/Register.vue'
import Feed from './components/Feed.vue'
import CreateProduct from './components/product/Create.vue'
import Edit from './components/product/Edit.vue'

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/login',
      component: Login,
      meta: {
        forVisitors: true
      }
    },
    {
      path: '/register',
      component: Register,
      meta: {
        forVisitors: true
      }
    },
    {
      path: '/feed',
      component: Feed,
      meta: {
          forAuth: true
      }
    },
    {
      path: '/product/create',
      component: CreateProduct,
      meta: {
          forAuth: true
      }
    },
    {
      path: '/product/:product/update',
      component: Edit,
      meta: {
          forAuth: true
      }
    },
  ],
  mode: 'history',

  linkActiveClass: 'active' //mengganti nama class pada router-link
})

export default router
