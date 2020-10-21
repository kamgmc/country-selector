import Vue from 'vue'
import Vuex from 'vuex'
import { COUNTRIES, DARK_MODE } from '@/store/variables'
import axios from 'axios'
import current from '@/store/modules/current'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    darkMode: null,
    isLoading: true,
    countries: []
  },
  mutations: {
    toggleDarkMode (state) {
      state.darkMode = !state.darkMode
      localStorage.setItem(DARK_MODE, state.darkMode)
    },
    showLoader (state) {
      state.isLoading = true
    },
    hideLoader (state) {
      state.isLoading = false
    },
    setCountries (state, countries) {
      state.countries = countries
    }
  },
  actions: {
    //  Initialize
    initializeStore (context) {
      if (localStorage.getItem(DARK_MODE)) {
        context.state.darkMode = JSON.parse(localStorage.getItem(DARK_MODE))
      }
      if (!localStorage.getItem(COUNTRIES)) {
        context.dispatch('getAllCountries')
      } else {
        const countries = JSON.parse(localStorage.getItem(COUNTRIES))
        context.commit('setCountries', countries)
        context.commit('setCurrentCountryList', countries)
        context.commit('hideLoader')
      }
    },
    // Countries
    getAllCountries (context) {
      context.commit('showLoader')
      axios.get(`${process.env.VUE_APP_API_URL}all`)
        .then(response => {
          context.commit('setCountries', response.data)
          context.commit('setCurrentCountryList', response.data)
          //  Save countries on localStorage
          localStorage.setItem(COUNTRIES, JSON.stringify(response.data))
        })
        .catch(reason => console.warn(reason))
        .finally(() => context.commit('hideLoader'))
    }
  },
  modules: {
    current
  }
})
