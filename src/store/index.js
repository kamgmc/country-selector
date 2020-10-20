import Vue from 'vue'
import Vuex from 'vuex'
import { DARK_MODE } from '@/store/variables'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    darkMode: null
  },
  mutations: {
    toggleDarkMode (state) {
      state.darkMode = !state.darkMode
      localStorage.setItem(DARK_MODE, state.darkMode)
    }
  },
  actions: {
    initializeStore (context) {
      if (localStorage.getItem(DARK_MODE)) {
        context.state.darkMode = JSON.parse(localStorage.getItem(DARK_MODE))
      }
    }
  }
})
