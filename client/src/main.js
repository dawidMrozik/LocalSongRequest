import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocketIOExt from 'vue-socket.io-extended'
import io from 'socket.io-client'
import VueYoutube from 'vue-youtube'

Vue.use(VueYoutube)

Vue.config.productionTip = false

const socket = io('http://localhost:1337')

Vue.use(VueSocketIOExt, socket, { store })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
