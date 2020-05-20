<style lang="scss">
  @import '/app/scss/styles.scss';
</style>

<template>
  <div id="app">
    <Header />

    <router-view  :key="componentKey"/>

    <Navigation />



    <svg style="display: none">
      <symbol id="close" viewBox="0 0 492 492">
        <path d="M300.188,246L484.14,62.04c5.06-5.064,7.852-11.82,7.86-19.024c0-7.208-2.792-13.972-7.86-19.028L468.02,7.872
          c-5.068-5.076-11.824-7.856-19.036-7.856c-7.2,0-13.956,2.78-19.024,7.856L246.008,191.82L62.048,7.872
          c-5.06-5.076-11.82-7.856-19.028-7.856c-7.2,0-13.96,2.78-19.02,7.856L7.872,23.988c-10.496,10.496-10.496,27.568,0,38.052
          L191.828,246L7.872,429.952c-5.064,5.072-7.852,11.828-7.852,19.032c0,7.204,2.788,13.96,7.852,19.028l16.124,16.116
          c5.06,5.072,11.824,7.856,19.02,7.856c7.208,0,13.968-2.784,19.028-7.856l183.96-183.952l183.952,183.952
          c5.068,5.072,11.824,7.856,19.024,7.856h0.008c7.204,0,13.96-2.784,19.028-7.856l16.12-16.116
          c5.06-5.064,7.852-11.824,7.852-19.028c0-7.204-2.792-13.96-7.852-19.028L300.188,246z"/>
      </symbol>
      <symbol id="open" viewBox="0 0 30.727 30.727" >
        <path d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0
        l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z"/>
      </symbol>
    </svg>
  </div>
</template>

<script>
  import Header from '@/app/shared/components/Header.vue'
  import Navigation from '@/app/shared/components/Navigation.vue'
  import { mapState, mapMutations } from 'vuex';

  import axios from 'axios';

  export default {
    components: {
      Navigation,
      Header
    },
    data(){
      return {
        job: '',

      }
    },
    computed: {
      //necessary values to manage which runchart we are looking at
      ...mapState([
            'componentKey',
            'collapsedHeader',
            
            'baseURL',
            'jobNumber',
            'longJobNumber',
            'opNumber',
          ]),
    },
    methods: {
      ...mapMutations([
        'UPDATE_KEY'
      ]),
    },
    mounted () {
      // api call
      axios.get( this.baseURL + this.jobNumber + '/' + this.opNumber ).then(response => {
        // this.jobSpec = response.data
        this.job = response.data.runchartFeatures
        console.log(this.job)
        this.slideNumbers = response.data.runchartFeatures.length
      });
    }
  }
</script>
