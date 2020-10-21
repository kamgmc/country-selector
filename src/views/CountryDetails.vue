<template>
  <div id="country-details" class="hero">
    <div class="hero-head">
      <router-link class="button is-text back-button" to="/">
        <i class="fas fa-arrow-left"></i>
        Back
      </router-link>
    </div>
    <div class="hero-body" v-if="country">
      <div class="container is-fluid">
        <div class="columns is-marginless">
          <div class="column image-column">
            <figure class="image">
              <img :src="country.flag" :alt="country.name">
            </figure>
          </div>
          <div class="column detail-column">
            <div class="title has-text-weight-bold">{{ country.name }}</div>
            <div class="columns">
              <div class="column">
                <div class="line">
                  <span class="has-text-weight-medium">Native Name:</span> {{ country.nativeName }}
                </div>
                <div class="line" v-if="country.population">
                  <span class="has-text-weight-medium">Population:</span> {{ country.population.toLocaleString() }}
                </div>
                <div class="line">
                  <span class="has-text-weight-medium">Region:</span> {{ country.region }}
                </div>
                <div class="line">
                  <span class="has-text-weight-medium">Sub Region:</span> {{ country.subregion }}
                </div>
                <div class="line">
                  <span class="has-text-weight-medium">Capital:</span> {{ country.capital }}
                </div>
              </div>
              <div class="column">
                <div class="line" v-if="country.topLevelDomain">
                  <span class="has-text-weight-medium">Top Level Domain:</span> {{ country.topLevelDomain.join(', ') }}
                </div>
                <div class="line" v-if="country.currencies">
                  <span class="has-text-weight-medium">Currencies:</span> {{ currencies }}
                </div>
                <div class="line" v-if="country.languages">
                  <span class="has-text-weight-medium">Languages:</span> {{ languages }}
                </div>
              </div>
            </div>
            <div class="borders" v-if="borders && borders.length > 0">
              <span class="has-text-weight-medium">Border countries:</span>
              <router-link
                class="button is-text dense"
                v-for="country in borders"
                :key="country.alpha3Code"
                :to="`/details/${country.alpha3Code}`">
                {{ country.name }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CountryDetails',
  computed: {
    country () {
      return this.$store.state.current.country
    },
    borders () {
      return this.$store.state.current.borders
    },
    currencies () {
      return this.country.currencies.map(currency => currency.name).join(', ')
    },
    languages () {
      return this.country.languages.map(language => language.name).join(', ')
    }
  },
  watch: {
    $route: 'updateCountry'
  },
  methods: {
    updateCountry () {
      const countryCode = this.$route.params.code
      if (countryCode) {
        this.$store.dispatch('updateCurrentCountry', countryCode)
      } else {
        this.$router.push({ name: 'Home' })
      }
    }
  },
  mounted () {
    this.updateCountry()
  }
}
</script>
<style lang="scss">
@import "~bulma/sass/utilities/_all.sass";

#country-details {
  position: relative;
  background-color: var(--background-color);
  min-height: calc(100vh - 75px);
  z-index: 1;

  .hero-head {
    padding: 4rem;

    .back-button {
      i {
        margin-right: 8px;
      }
    }
  }

  .hero-body {
    padding: 0;
    padding-bottom: 2rem;
    color: var(--font-color);

    .column {
      padding: 0 2rem;

      &.image-column {
        padding-right: 3rem;
      }

      &.detail-column {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        padding-left: 3rem;

        .title {
          font-size: 24px;
          margin-bottom: 1.5rem;
        }

        .columns {
          width: 100%;
          margin: 0;
          margin-bottom: 32px;

          .column {
            padding: 0;

            .line {
              font-size: 14px;
              padding-top: 4px;
              padding-bottom: 4px;
            }
          }
        }

        .borders {
          span, a {
            display: inline-flex;
            margin: 8px 4px;

            &:first-child {
              margin-left: 0;
            }
          }
        }
      }
    }
  }

  @include mobile {
    .hero-head {
      padding: 2rem 1.5rem;
    }
    .hero-body {
      padding: 1.5rem;

      .container {
        padding: 0;

        .column {
          padding: 0;

          &.detail-column {
            margin-top: 2rem;

            .title {
              font-size: 16px;
              margin-bottom: 1rem;
            }

            .columns {
              margin-bottom: 0;

              .column{
                margin-bottom: 1.5rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
