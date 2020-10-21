<template>
  <div id="app" :class="{dark}">
    <Loader></Loader>
    <Headline></Headline>
    <router-view/>
  </div>
</template>

<style lang="scss">

</style>
<script>
import Headline from '@/components/Headline'
import Loader from '@/components/Loader'

export default {
  computed: {
    dark () {
      return this.$store.state.darkMode
    }
  },
  components: { Loader, Headline }
}
</script>
