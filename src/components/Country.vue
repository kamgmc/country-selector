<template>
  <div class="column is-one-quarter-desktop is-one-third-tablet country">
    <router-link class="box" :to="to">
      <figure class="image is-16by9">
        <img :src="country.flag" :alt="country.name">
      </figure>
      <div class="details">
        <div class="title has-text-weight-bold">{{ country.name }}</div>
        <div class="line">
          <span class="has-text-weight-medium">Population:</span> {{ country.population.toLocaleString() }}
        </div>
        <div class="line">
          <span class="has-text-weight-medium">Region:</span> {{ country.region }}
        </div>
        <div class="line" v-if="country.capital">
          <span class="has-text-weight-medium">Capital:</span> {{ country.capital }}
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Country',
  props: {
    country: {},
    to: {
      type: String,
      default: '',
      required: true
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

    &:hover, &:active {
      box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1);
      color: var(--font-color);

      .image {
        img {
          transform: scale(1.1);
        }
      }
    }

    .image {
      border-bottom: 1px solid rgba(120, 120, 120, 0.1);
      overflow: hidden;
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;

      img {
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        object-fit: cover;
        transition: transform 200ms ease-in-out;
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
    padding: 1.25rem 3rem;
  }
}
</style>
