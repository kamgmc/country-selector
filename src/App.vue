<template>
  <div id="app" :class="{dark}">
    <Headline></Headline>
    <router-view/>
  </div>
</template>

<style lang="scss">

</style>
<script>
import Headline from '@/components/Headline'

export default {
  computed: {
    dark () {
      return this.$store.state.darkMode
    }
  },
  components: { Headline }
}
</script>
