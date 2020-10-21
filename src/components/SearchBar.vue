<template>
  <div class="search-bar control has-icons-left">
    <input
      class="input has-text-weight-medium"
      type="text"
      v-model="search"
      placeholder="Search for a country..."
      @keyup.enter="searchCountry">
    <span class="icon is-left">
      <i class="fas fa-search"></i>
    </span>
  </div>
</template>

<script>
import { SEARCH } from '@/store/variables'

export default {
  name: 'SearchBar',
  data () {
    return {
      search: null
    }
  },
  methods: {
    searchCountry () {
      if (this.search) {
        localStorage.setItem(SEARCH, this.search)
        this.$store.dispatch('getCountriesByName', this.search.toLowerCase().trim())
      } else {
        this.$store.dispatch('getAllCountries')
      }
    }
  },
  mounted () {
    this.search = localStorage.getItem(SEARCH)
      ? localStorage.getItem(SEARCH)
      : null
  }
}
</script>

<style lang="scss">
.search-bar {
  max-width: 480px;
  width: 100%;

  &.control.has-icons-left {
    input {
      padding-left: 4rem;

      &:focus ~ .icon {
        color: var(--input-font-color);
      }
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 2rem;
      width: 4rem;
      top: calc(50% - 1rem);
      color: var(--input-font-color);
      font-size: 14px;
    }
  }

  input {
    border: none;
    padding: 1rem 2rem;
    height: auto;
    font-size: 14px;
    color: var(--input-font-color);
    background-color: var(--element-color);

    &::placeholder {
      color: var(--input-font-color);
      opacity: 1;
    }
  }
}
</style>
