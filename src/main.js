import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/styles.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate () {
    this.$store.dispatch('initializeStore')
  }
}).$mount('#app')
