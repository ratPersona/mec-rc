<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '@/app/scss/header.scss';
</style>

<template>
  <header id="header">
    <img alt="Vue logo" class="logo" src="@/assets/images/logo.png">

    <div class="search-inputs">
      <input v-model="jobNumber" @input="updateJobNumber" class="left search-input">
      <input v-model="opNumber" class="right search-input">
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
  computed: {
    updateRunchart: {
      get () {
        return this.$store.state.jobInfo.jobNumber
      },
      set (value) {
        this.$store.commit("updateJobNumber", value);
      }
    }
  },
  methods: {
    updateJobNumber (e) {
      this.$store.commit('updateJobNumber', e.target.value);
    }
  },
  mounted () {
    console.log(this.$store.state.jobInfo.jobNumber);
    // this.$store.commit("updateJobNumber", "new job number");
    // this.$store.commit("updateJobNumber", {
    //        // newJob: this.jobNumber,
    //        newJob: "new job number",
    //
    // });
  }
}
</script>
