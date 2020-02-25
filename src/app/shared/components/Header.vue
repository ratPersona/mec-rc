<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '@/app/scss/header.scss';
</style>

<template>
  <header id="header">
    <img alt="Vue logo" class="logo" src="@/assets/images/logo.png">

    <div class="search-inputs">
      <input v-model="jobNumber" class="left search-input" placeholder="Job #">
      <input v-model="opNumber" class="right search-input" placeholder="Op #">
      <!-- <button class="button search-input"><svg class="icon"><use href="#search"></use></svg></button> -->
    </div>
  </header>
</template>

<script>
export default {
  name: 'Navigation',
  data: function () {
    return {
       jobNumber: 'Job #',
       opNumber: 'Op #',
    }
  },
  mounted () {
    console.log(this.$store.state.jobInfo.jobNumber);
    this.$store.commit("updateJobNumber", "new job number");

    // this.$store.commit("updateJobNumber", {
    //        // newJob: this.jobNumber,
    //        newJob: "new job number",
    //
    // });
  }
}
</script>
