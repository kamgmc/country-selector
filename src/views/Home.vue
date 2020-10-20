<template>
  <div id="home" class="hero">
    <div class="hero-head">
      <div class="container is-fluid">
        <div class="columns is-marginless">
          <div class="column is-flex is-align-items-center">
            <SearchBar></SearchBar>
          </div>
          <div class="column is-flex region">
            <AppSelect
              placeholder="Filter By Region"
              :options="regions"
              @input="changeRegion"></AppSelect>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-body">
      <div class="container is-fluid">
        <div class="columns is is-marginless is-flex-wrap-wrap">
          <Country
            v-for="country in countries"
            :key="country.name"
            :country="country">
          </Country>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Country from '@/components/Country'
import AppSelect from '@/components/AppSelect'
import SearchBar from '@/components/SearchBar'

export default {
  name: 'Home',
  data () {
    return {
      regions: [
        'Africa',
        'Americas',
        'Asia',
        'Europe',
        'Oceania'
      ]
    }
  },
  computed: {
    countries () {
      return this.$store.state.countries
    }
  },
  methods: {
    changeRegion (region) {
      if (region) {
        this.$store.dispatch('getCountriesByRegion', region.toLowerCase())
      }
    }
  },
  components: {
    SearchBar,
    AppSelect,
    Country
  }
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all.sass";

#home {
  position: relative;
  background-color: var(--background-color);
  min-height: calc(100vh - 75px);
  z-index: 1;

  .hero-head {
    padding: 2.75rem 2rem 0 2rem;

    @include mobile {
      padding: 1.75rem .75rem .5rem .75rem;

      .container {
        padding: 0;

        .column.region {
          margin-top: 2.5rem;
          justify-content: flex-start;
        }
      }
    }

    .column {
      padding: 0;

      &.region {
        justify-content: flex-end;
      }
    }
  }

  .hero-body {
    padding: .75rem 0 2.5rem 0;

    @include mobile {
      .container {
        padding: 0;
      }
    }
  }
}
</style>
