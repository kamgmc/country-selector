<template>
  <header id="headline" class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-mobile">
          <div class="column has-text-weight-bold title">
            Where in the world?
          </div>
          <div class="column has-text-right">
            <button
              class="button is-text mode-button"
              @click="toggleDarkMode">
              <i class="fas" :class="{'fa-moon': !dark, 'fa-sun': dark}"></i>
              {{ dark ? 'Light' : 'Dark' }} mode
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Headline',
  computed: {
    dark () {
      return this.$store.state.darkMode
    }
  },
  methods: {
    ...mapMutations(['toggleDarkMode'])
  }
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all.sass";

#headline {
  position: relative;
  background-color: var(--element-color);
  -webkit-box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
  z-index: 99;

  .hero-body {
    padding: 2rem 4rem;

    .column {
      padding: 0;

      &.title {
        display: flex;
        align-items: center;
        font-size: 16px;
        color: var(--font-color);
      }

      .mode-button {
        font-size: 14px;
        color: var(--font-color);
        text-decoration: none;

        i {
          margin-right: 4px;
        }
      }
    }

    @include mobile {
      padding: 2rem 2rem;

      .column.title {
        font-size: 14px;
      }
    }
  }
}

.dark {
  #headline {
    .mode-button {
      &:hover {
        background-color: rgba(255, 255, 255, .1);
      }
    }
  }
}
</style>
