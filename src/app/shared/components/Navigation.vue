<template>
  <nav id="nav">
    <router-link to="/job-info">Job Info</router-link>
    <router-link to="/schedule">Schedule</router-link>
    <router-link to="/runchart">Runchart</router-link>
    <router-link to="/drawings">Drawings</router-link>
    <router-link to="/hanging">Hanging</router-link>
    <router-link to="/packaging">Packaging</router-link>
    <!-- <router-link to="/product-issue">Product Issue</router-link>
    <router-link to="/vpars">VPars</router-link>
    <router-link to="/assistance">Assistance</router-link>
    <router-link to="/timekeeping">Timekeeping</router-link>
    <router-link to="/material-request">Material Request</router-link> -->
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '@/app/scss/navigation.scss';
</style>
