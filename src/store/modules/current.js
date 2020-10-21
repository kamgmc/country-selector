import axios from 'axios'

const current = {
  state: {
    country: {},
    borders: [],
    countryList: []
  },
  mutations: {
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
      axios.get(`${process.env.VUE_APP_API_URL}region/${region}`)
        .then(response => context.commit('setCurrentCountryList', response.data))
        .catch(reason => console.warn(reason))
    },
    getCountriesByName (context, name) {
      axios.get(`${process.env.VUE_APP_API_URL}name/${name}`)
        .then(response => context.commit('setCurrentCountryList', response.data))
        .catch(reason => console.warn(reason))
    },
    updateCurrentCountry ({ rootState, commit, dispatch }, code) {
      //  Search country on the loaded list
      if (rootState.countries.length > 0) {
        const country = rootState.countries.find(country => country.alpha3Code === code)
        commit('setCurrentCountry', country)
        dispatch('updateBorders', country)
        return
      }
      //  Else load country information from API
      axios.get(`${process.env.VUE_APP_API_URL}alpha/${code}`)
        .then(response => {
          commit('setCurrentCountry', response.data)
          dispatch('updateBorders', response.data)
        })
        .catch(reason => console.warn(reason))
    },
    updateBorders ({ rootState, commit }, country) {
      //  Reset borders
      commit('setCurrentBorders', null)
      //  Search border countries on loaded list
      const borders = country.borders
      commit('setCurrentBorders',
        rootState.countries.filter(country => borders.indexOf(country.alpha3Code) > -1))
    }
  }
}

export default current
