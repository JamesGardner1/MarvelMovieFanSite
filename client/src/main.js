import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import router from './router'


import BootstrapVue from 'bootstrap-vue'
import MovieAPIService from '@/services/movieService'

Vue.use(VueRouter)

Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.prototype.$movieService = MovieAPIService

new Vue({
  render: h => h(App),
  router   /* include the routes */
}).$mount('#app')
