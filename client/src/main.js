import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'

import MovieAPIService from '@/services/movieService'

Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.prototype.$movieService = MovieAPIService

new Vue({
  render: h => h(App),
}).$mount('#app')
