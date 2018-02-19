import Vue from 'vue'
import App from './App.vue'
import Router from './routes.js'
import VueResource from 'vue-resource'
import swall from 'sweetalert'
import Auth from './packages/auth/Auth.js'
import vValidate from 'vee-validate'
import BootstrapVue from 'bootstrap-vue'

Vue.use(VueResource)
Vue.use(Auth)
Vue.use(vValidate)
Vue.use(BootstrapVue);

Vue.http.options.root = "http://localhost:8000"
Vue.http.headers.common['Authorization'] = 'Bearer ' + Vue.auth.getToken()

Vue.http.interceptors.push((request, next) => {
  next(response => {
    if(response.status == 404 )
      swall(response.status.toString(), response.body.error, 'error')
    else if(response.status == 500)
      swall(response.status.toString(), "We are experiencing a promlem in our server!", 'error')
  })
})

Router.beforeEach(
  (to, from, next) => {
    if (to.matched.some(record => record.meta.forVisitors)) {
      if (Vue.auth.isAuthenticated()) {
        next({
          path: '/feed'
        })
      } else next()
    } else if (to.matched.some(record => record.meta.forAuth)) {
      if (!Vue.auth.isAuthenticated()) {
        next({
          path: '/login'
        })
      } else next()
    } else next()
  }
)

new Vue({
  el: '#app',
  render: h => h(App),
  router: Router
})
