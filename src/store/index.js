import Vue from 'vue'
import Vuex from 'vuex'
import { COUNTRY_FIELD_FILTER, DARK_MODE } from '@/store/variables'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    darkMode: null,
    countries: []
  },
  mutations: {
    toggleDarkMode (state) {
      state.darkMode = !state.darkMode
      localStorage.setItem(DARK_MODE, state.darkMode)
    },
    setCountries (state, countries) {
      state.countries = countries
    }
  },
  actions: {
    initializeStore (context) {
      if (localStorage.getItem(DARK_MODE)) {
        context.state.darkMode = JSON.parse(localStorage.getItem(DARK_MODE))
      }
      context.dispatch('getAllCountries')
    },
    getAllCountries (context) {
      axios.get(`${process.env.VUE_APP_API_URL}all${COUNTRY_FIELD_FILTER}`)
        .then((response) => {
          context.commit('setCountries', response.data)
        })
        .catch(reason => console.warn(reason))
    },
    getCountriesByRegion (context, region) {
      axios.get(`${process.env.VUE_APP_API_URL}region/${region + COUNTRY_FIELD_FILTER}`)
        .then((response) => {
          context.commit('setCountries', response.data)
        })
        .catch(reason => console.warn(reason))
    }
  }
})
