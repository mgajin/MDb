import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import theme from '@/assets/theme/main.scss'

Vue.config.productionTip = false
Vue.use(theme)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
