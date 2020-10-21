<template>
  <div
    class="overlay"
    :class="{'is-active': isLoading}">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
  name: 'Loader',
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    }
  }
}
</script>

<style lang="scss">
@keyframes spinAround {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
    transform: rotate(359deg);
  }
}
.overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  opacity: 0;
  z-index: -1;
  background: rgba(0, 0, 0, .35);
  transition: opacity .3s;

  .loader {
    animation: spinAround 500ms infinite linear;
    border: 3px solid whitesmoke;
    border-radius: 290486px;
    border-right-color: transparent;
    border-top-color: transparent;
    display: block;
    position: relative;
    height: 160px;
    width: 160px;
  }

  &.is-active {
    opacity: 1;
    z-index: 999;
  }
}
</style>
