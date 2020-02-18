<template>
  <div class="runchart">
    <Runchart />
  </div>
</template>
<script>
  //import Runchart from 'Runchart';
  import Runchart from '../components/Runchart.vue'

  export default {
    components: {
      Runchart
    }
  }
</script>

<style scoped lang="scss">
  @import '../scss/runchart.scss';
</style>
