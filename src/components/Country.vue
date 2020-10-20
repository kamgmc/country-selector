<template>
  <div class="column is-one-quarter-desktop is-one-third-tablet country">
    <div class="box">
      <figure class="image is-16by9">
        <img :src="country.flag" :alt="country.name">
      </figure>
      <div class="details">
        <div class="title has-text-weight-bold">{{ country.name }}</div>
        <div class="line">
          <span class="has-text-weight-medium">Population:</span> {{ population }}
        </div>
        <div class="line">
          <span class="has-text-weight-medium">Region:</span> {{ country.region }}
        </div>
        <div class="line" v-if="country.capital">
          <span class="has-text-weight-medium">Capital:</span> {{ country.capital }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Country',
  props: {
    country: {}
  },
  computed: {
    population () {
      return this.country.population.toLocaleString('de-DE')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/_all.sass";

.country {
  padding: 2rem;

  .box {
    padding: 0;
    background-color: var(--element-color);

    .image {
      border-bottom: 1px solid rgba(120, 120, 120, 0.1);

      img {
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        object-fit: cover;
      }
    }

    .details {
      padding: 1rem 1.25rem;
      font-size: 14px;

      .title {
        margin-bottom: 16px;
      }
    }
  }

  @include mobile {
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
  }
}
</style>
