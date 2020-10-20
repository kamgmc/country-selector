<template>
  <header id="headline">
    <div class="title">Where in the world?</div>
    <div class="mode-wrapper">
      <button
        class="btn-mode"
        @click="toggleDarkMode">
        <i class="fas" :class="{'fa-moon': !dark, 'fa-sun': dark}"></i>
        {{ dark ? 'Light' : 'Dark' }} mode
      </button>
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
#headline {
  display: flex;
  align-items: center;
  padding: 20px 72px;
  background-color: var(--element-color);
  -webkit-box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);

  .title, .mode-wrapper {
    display: flex;
    flex-grow: 1;
  }

  .title {
    font-size: 18px;
    font-weight: 800;
    color: var(--font-color);
  }

  .mode-wrapper {
    justify-content: flex-end;
    text-align: right;

    .btn-mode {
      font-size: 14px;
      border-radius: 8px;
      padding: 8px 16px;
      border: none;
      background-color: transparent;
      color: var(--font-color);
      transition: all 180ms ease-in;

      &:hover {
        background-color: rgba(108, 108, 108, 0.1);
        cursor: pointer;
      }

      i {
        margin-right: 2px;
      }
    }
  }
}
</style>
