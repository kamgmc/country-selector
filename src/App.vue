<template>
  <div id="app" :class="{dark}">
    <Loader></Loader>
    <Headline></Headline>
    <transition mode="out-in" :name="transition">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import Headline from '@/components/Headline'
import Loader from '@/components/Loader'

export default {
  data () {
    return {
      transition: 'slide-right'
    }
  },
  computed: {
    dark () {
      return this.$store.state.darkMode
    }
  },
  components: {
    Loader,
    Headline
  },
  watch: {
    $route (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>
<style lang="scss">
$distance: 75%;
$duration: 360ms;

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: $duration;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate($distance, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-$distance, 0);
}
</style>
