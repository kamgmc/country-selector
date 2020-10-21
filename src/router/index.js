import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CountryDetails from '../views/CountryDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/details/:code',
    name: 'Details',
    component: CountryDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
