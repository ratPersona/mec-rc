<template>
  <div id="app">
    <Header />

    <router-view/>

    <Navigation />
  </div>
</template>

<style lang="scss">
  @import '/app/scss/styles.scss';
</style>

<script>
  import Header from '@/app/shared/components/Header.vue'
  import Navigation from '@/app/shared/components/Navigation.vue'

  export default {
    components: {
      Navigation,
      Header
    }
  }
</script>
