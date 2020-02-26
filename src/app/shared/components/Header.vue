<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '@/app/scss/header.scss';
</style>

<template>
  <header id="header">
    <!-- <button role="button" @click="toggleHeader">
      <svg class="open" v-if="collapsedHeader"><use href="#dots"></use></svg>
      <svg class="close" v-else><use href="#close"></use></svg>
    </button> -->
    <div v-if="collapsedHeader">
      <img alt="Vue logo" class="logo-collapse" src="@/assets/images/logo.png">
      <div class="job-op">
        <h3>Job # :</h3><span>{{ jobNumber }}</span>
        <h3>Op # :</h3><span>{{ opNumber }}</span>
      </div>
      <button role="button" @click="toggleHeader">
        <svg class="open"><use href="#dots"></use></svg>
      </button>
    </div>
    <div v-else>
      <img alt="Vue logo" class="logo" src="@/assets/images/logo.png">
      <form @submit.prevent="updateJob && updateOp" class="search-inputs">
        <input v-model="jobNumber" @input="updateJob" class="left search-input">
        <input v-model="opNumber" @input="updateOp" class="right search-input">
        <!-- <button class="button search-input"><svg class="icon"><use href="#search"></use></svg></button> -->
      </form>
      <button role="button" @click="toggleHeader">
        <svg class="close"><use href="#close"></use></svg>
      </button>
    </div>
  </header>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Navigation',
  data: function () {
    return {
       collapsedHeader: true
    }
  },
  computed: {
    ...mapState([
          'jobNumber',
          'opNumber'
        ]),
  },
  methods: {
    ...mapMutations([
      'UPDATE_JOB',
      'UPDATE_OP'
    ]),
    updateJob (e) {
      // this.$store.commit('updateJobNumber', e.target.value);
      this.UPDATE_JOB(e.target.value)
    },
    updateOp (e) {
      this.UPDATE_OP(e.target.value)
    },
    updateRunchartInfo (job, op) {
      console.log(this.jobNumber, this.opNumber)
      this.jobNumber = job;
      this.opNumber = op;
    },
    //toggle true/false on open close button
    toggleHeader: function() {
      this.collapsedHeader = !this.collapsedHeader;
    }
  },
  mounted () {
    // console.log(this.$store.state.jobInfo.jobNumber);
    // this.$store.commit("updateJobNumber", "new job number");
    // this.$store.commit("updateJobNumber", {
    //        // newJob: this.jobNumber,
    //        newJob: "new job number",
    //
    // });
  }
}
</script>
