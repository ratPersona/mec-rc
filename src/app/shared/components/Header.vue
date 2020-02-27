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
      <button role="button" @click="checkHeaderValue">
        <svg class="open"><use href="#dots"></use></svg>
      </button>
    </div>
    <div v-else>
      <img alt="Vue logo" class="logo" src="@/assets/images/logo.png">
      <!-- <form @submit.prevent="updateJob && updateOp"> -->
      <form>
        <div class="search-inputs">
          <input v-model="jobNumber" @input="updateJob" class="left search-input">
          <input v-model="opNumber" @input="updateOp" class="right search-input">
        </div>
        <!-- <button class="button search-input"><svg class="icon"><use href="#search"></use></svg></button> -->
        <button role="button" @click="checkHeaderValue" id="correct"> <!-- @click="forceRerender"  -->
          <svg class="close"><use href="#check"></use></svg>
        </button>
      </form>
    </div>
  </header>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Navigation',
  data: function () {
    return {
      //toggles the height/state of the header
       // collapsedHeader: true
    }
  },
  computed: {
    //necessary values to manage which runchart we are looking at
    ...mapState([
          'jobNumber',
          'opNumber',
          'componentKey',
          'collapsedHeader'
        ]),
  },
  methods: {
    //functions used to update the axios call
    ...mapMutations([
      'UPDATE_JOB',
      'UPDATE_OP',
      'UPDATE_HEADER',
      'UPDATE_KEY'
    ]),
    updateJob (e) {
      this.UPDATE_JOB(e.target.value)
    },
    updateOp (e) {
      this.UPDATE_OP(e.target.value)
    },
    //toggle true/false on open close button
    checkHeaderValue () {
      this.UPDATE_HEADER(this.collapsedHeader = !this.collapsedHeader);
      if (this.collapsedHeader === true) {
        this.UPDATE_KEY(this.componentKey += 1);
        console.log("true", this.componentKey);
        // return;
      } else if (this.collapsedHeader === false) {
        console.log("false")
        return;
      }
    },
  },
  mounted () {

  }
}
</script>
