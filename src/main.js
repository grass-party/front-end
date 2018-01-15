import Vue from 'vue'
import App from './App'
import store from './store/index'
import router from './router/index'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

Vue.use(Buefy)

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App)
})


