import axios from 'axios'
import { SEARCH } from '@/store/variables'

const current = {
  state: {
    search: '',
    country: {},
    borders: [],
    countryList: []
  },
  mutations: {
    setCurrentSearch (state, search) {
      state.search = search
      localStorage.setItem(SEARCH, search)
    },
    setCurrentCountry (state, country) {
      state.country = country
    },
    setCurrentBorders (state, borders) {
      state.borders = borders
    },
    setCurrentCountryList (state, countries) {
      state.countryList = countries
    }
  },
  actions: {
    getCountriesByRegion (context, region) {
      context.commit('showLoader')
      axios.get(`${process.env.VUE_APP_API_URL}region/${region}`)
        .then(response => context.commit('setCurrentCountryList', response.data))
        .catch(reason => console.warn(reason))
        .finally(() => context.commit('hideLoader'))
    },
    getCountriesByName (context, name) {
      context.commit('showLoader')
      context.commit('setCurrentSearch', name)
      axios.get(`${process.env.VUE_APP_API_URL}name/${name}`)
        .then(response => context.commit('setCurrentCountryList', response.data))
        .catch(reason => {
          reason.response.status === 404
            ? context.commit('setCurrentCountryList', null)
            : console.warn(reason)
        })
        .finally(() => context.commit('hideLoader'))
    },
    updateCurrentCountry ({ rootState, commit, dispatch }, code) {
      commit('showLoader')
      //  Search country on the loaded list
      if (rootState.countries.length > 0) {
        const country = rootState.countries.find(country => country.alpha3Code === code)
        commit('setCurrentCountry', country)
        dispatch('updateBorders', country)
        commit('hideLoader')
        return
      }
      //  Else load country information from API
      axios.get(`${process.env.VUE_APP_API_URL}alpha/${code}`)
        .then(response => {
          commit('setCurrentCountry', response.data)
          dispatch('updateBorders', response.data)
        })
        .catch(reason => console.warn(reason))
        .finally(() => commit('hideLoader'))
    },
    updateBorders ({ rootState, commit }, country) {
      //  Reset borders
      commit('setCurrentBorders', null)
      //  Search border countries on loaded list
      const borders = country.borders
      commit('setCurrentBorders',
        rootState.countries.filter(country => borders.indexOf(country.alpha3Code) > -1))
    }
  },
  getters: {
    searchEmptyMessage (state) {
      return `Sorry, we couldn't find any country related to "${state.search}"`
    }
  }
}

export default current
