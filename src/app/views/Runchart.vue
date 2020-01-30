<template>
  <div class="runchart">
    <h1>Runchart View</h1>
    <Runchart />
  </div>
</template>
<script>
  //import Runchart from 'Runchart';
  import Runchart from '../shared/components/Runchart.vue'

  export default {
    components: {
      Runchart
    }
  }
</script>

<style scoped lang="scss">
  @import '../scss/runchart.scss';
</style>
