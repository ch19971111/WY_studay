import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/font/iconfont.css'
import './assets/styles/reset.css'
import './assets/styles/animate.css'
import store from './store/store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
