<template>
  <div id="home" class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-flex-wrap-wrap">
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

export default {
  name: 'Home',
  components: { Country },
  computed: {
    countries () {
      return this.$store.state.countries
    }
  }
}
</script>

<style lang="scss">
#home {
  position: relative;
  background-color: var(--background-color);
  min-height: calc(100vh - 75px);
  z-index: 1;

  .hero-body {
    padding: 2.5rem 1.5rem;
  }
}
</style>
