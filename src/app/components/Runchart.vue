<style scoped lang="scss">
  @import '../scss/runchart.scss';
</style>

<template>
  <main class="runchart-main-view">
    <section v-if="chart">
      <article class="runchart-details">
        <button role="button" class="toggle-me-btn" @click="toggleMe()">
          <svg v-if="toggle" class="icon open"><use href="#close"></use></svg>
          <svg class="icon closed" v-else><use href="#open"></use></svg>
        </button>
        <div class="details-top flex-container">
          <div class="flex"><h1>Run Chart #:</h1> <span>{{ headerData.runchartNumber }}</span></div>
          <div class="flex"><h2>Run Chart Revision:</h2> <span>{{ headerData.runchartRevision }}</span></div>
        </div>
        <div v-if="toggle">
          <div class="details-middle border open">
            <ul class="flex-container value-list">
              <li class="flex"><h3>Drawn By :</h3> <span>{{ headerData.createdByName }}</span></li>
              <li class="flex"><h3>W/CTR :</h3> <span>{{ headerData.workCenter }}</span></li>
              <li class="flex"><h3>Alt Route :</h3> <span>{{ headerData.routeCode }}</span></li>
              <li class="flex"><h3>Dept # :</h3> <span>{{ headerData.department }}</span></li>
              <li class="flex"><h3>Oper # :</h3> <span>{{ headerData.operation }}</span></li>
              <li class="flex"><h3>Part # :</h3> <span>{{ headerData.partNumber }}</span></li>
            </ul>
          </div>
          <div class="details-bottom flex-container border open">
            <div class="flex"><h3>Job #:</h3> <span>{{ this.jobNumber }}</span></div>
            <div class="flex"><h3>Date :</h3> <span>{{ headerData.createdDate | moment("DD/MM/YYYY") }}</span></div>
            <div class="flex"><h3>Clock #:</h3> <span>{{ headerData.createdBy }}</span></div>
          </div>
        </div>
        <div v-else></div>
      </article>

      <section class="runchart-buttons">
        <section class="button-list">
          <hooper group="group1" :settings="hooperSettings">
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
            <slide class="runchart-button" v-for="detail of job" :key="detail">
              <div @click="carouselButton()">{{ detail.featureNumber +  '. '  +  detail.featureDescription }}</div>
            </slide>
          </hooper>
        </section>
      </section>
      <section class="carousel-container">
        <hooper group="group1" ref="carousel" :settings="hooperSettings2">
          <slide v-for="detail of job" :key="detail" class="slide">
            <div class="left feature-details">
              <h2>{{ detail.featureNumber }}. {{ detail.featureDescription +  ' '  + detail.featureType }}</h2>
              <p>{{ detail.notes }}</p>
              <div class="feature-detail border">
                <h3>Location :</h3> <span>{{ detail.location }}</span>
              </div>
              <div class="feature-detail border">
                <h3>Frequency :</h3> <span>{{ detail.frequency }}</span>
              </div>
              <div class="feature-detail border">
                <h3>Insp. Tool :</h3> <span>{{ detail.inspectTool }}</span>
              </div>
            </div>
            <div class="right feature-deets">
              <div class="feature-info">
                <div class="graph-container" v-if="detail.featureType === 1">
                  <header class="content-header">
                    <h2 class="runchart-header">{{ detail.featureId }}</h2>
                    <div class="input-container">
                      <svg class="info-tooltip"><use href="#info"></use></svg>
                      <input placeholder="#Passing Amount" v-model="newRunchartFeature.dimension">
                      <button class="runchart-add-btn" @click="addFeature()">Add to Chart</button>
                    </div>
                  </header>

                  <!-- <div v-for="featureDetails in detail.featureResults" :key="featureDetails"> -->
                    <!-- createDate: (...)
                    createTime: (...)
                    dimension: (...)
                    employeeNumber: (...)
                    jobNum: (...)
                    jobNumber: (...)
                    notes: (...)
                    operation: (...)
                    resultsId: (...)
                    rowid: (...) -->
                    <!-- {{ featureDetails.createDate | moment("MM/DD/YYYY") }}
                    {{ featureDetails.dimension }}
                    {{ featureDetails.notes }} -->
                  <!-- </div> -->
                  <!-- <apexchart width="500" type="scatter" :data="featureDetails.employeeNumber" :series="series"></apexchart> -->
                  <!-- <GChart
                    class="runchart-graph"
                    type="ScatterChart"
                    :data="[featureDetails]"
                    :option="graphOptions" /> -->
                    <!-- <div v-for="featureDetails in detail.featureResults" :key="featureDetails">
                    </div> -->
                    <Scatter
                      :chartdata="chartData"
                    >
                  </Scatter>
                </div>

                <div v-else>
                  <header class="content-header">
                    <h2 class="runchart-header">Pass/Fail</h2>
                    <div class="input-container">
                      <svg class="info-tooltip"><use href="#info"></use></svg>
                      <select v-model="newRunchartFeature.dimension">
                        <option value="0">Pass</option>
                        <option value="1">Fail</option>
                      </select>
                      <!-- <button class="runchart-add-btn">Add to Chart</button> -->
                      <button class="runchart-add-btn" @click="addFeature()">Add to Chart</button>

                    </div>
                  </header>
                  <div class="pass-fail-grid">
                    <!-- <div @mouseover="item.hover = true" @mouseleave="item.hover = false" :class="{ active: item.hover }"  v-for="featureDetails in detail.featureResults" :key="featureDetails" class="grid"> -->
                    <div @mouseover="hover = true" @mouseleave="hover = false" :class="{ active: hover }"  v-for="featureDetails in detail.featureResults" :key="featureDetails" class="grid">
                      <h3 class="grid-date">{{ featureDetails.createDate | moment("MM/DD/YYYY") }}</h3>

                      <div v-if="featureDetails.dimension === 1">
                        <span class="sr-only">Pass</span>
                        <svg class="pass"><use href="#pass"></use></svg>
                      </div>

                      <div v-else>
                        <span class="sr-only">Fail</span>
                        <svg class="fail"><use href="#fail"></use></svg>
                      </div>

                      <div class="hidden-details">
                        <span><strong>Dimension:</strong> {{ featureDetails.dimension }}</span>
                        <span><strong>Notes:</strong> {{ featureDetails.notes }}</span>
                        <span><strong>Employee:</strong> {{ featureDetails.employeeNumber }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </slide>
          <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </hooper>
      </section>
    </section>

    <section v-else>
      There is something wrong with the Job or Op number.
      <div class="search-inputs">
        <input v-model="jobNumber" @input="updateJob" class="left search-input">
        <input v-model="opNumber" @input="updateOp" class="right search-input">
        <button role="button" @click="checkHeaderValue" id="correct">
          <svg class="close"><use href="#check"></use></svg>
        </button>
      </div>
    </section>
  </main>
</template>

<script>
  import 'hooper/dist/hooper.css';
  import axios from 'axios';

  // import Chart from 'chart.js';
  import { Scatter } from 'vue-chartjs'

    // import VueApexCharts from 'vue-apexcharts'
  import { mapState, mapMutations } from 'vuex';
  import { Hooper, Slide, Navigation as HooperNavigation, Pagination as HooperPagination } from 'hooper';

  export default {
      name: 'Runchart',
      components: {
        Hooper,
        Slide,
        HooperPagination,
        HooperNavigation,
        Scatter
        // apexchart: VueApexCharts,
      },
      data: function () {
         return {

           //chart detailsTop
           jobSpec: [],
           hover: false,
           //add a POST
            newRunchartFeature: {
              notes: "",
              dimension: ""
            },
           //other
           toggle: false,
           post: '',
           graph: true,
           slideNumbers: [],
           chartData: [],

           graphOptions: {
              title: 'Dimensions',
              hAxis: {title: 'Dimension', minValue: 0, maxValue: 15},
              vAxis: {title: 'Date', minValue: 0, maxValue: 15},
              legend: 'none'
           },

           numberInput: '',
            hooperSettings: {
              itemsToShow: 4,
              centerMode: false
            },
            hooperSettings2: {
               itemsToShow: 1,
               centerMode: true
             },

             detailsTop: [

             ],
             carouselData: 0,
           }
        },
      watch: {
        carouselData() {
          this.$refs.carousel.slideTo(this.carouselData);
        }
      },
      methods: {
        //ADD TO TABLE
        addFeature() {
          let today = new Date()
          let todayDate = today.toJSON().slice(0,10).replace(/-/g,'-')
          let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()

          let newFeatureData = {
            "createDate": todayDate,
            "createTime": time,
            "dimension": parseInt(this.newRunchartFeature.dimension),
            "notes": this.newRunchartFeature.notes,
            "jobNumber": parseInt(this.longJobNumber),
            "jobNum": parseInt(this.jobNumber),
            "operation": parseInt(this.opNumber),
            "employeeNumber": parseInt(964),
            "resultsId": 0,
            "rowid": null,
            "runchartFeatureId": 1326113,
          }
          this.UPDATE_KEY(this.componentKey += 1)
          axios.post("https://mytest.mecinc.com/v2/api/Runchart", newFeatureData)
          // axios.post("https://mec-testnet-01/v2/api/Runchart", newFeatureData)
          console.log(newFeatureData)
        },

        //STORE
        ...mapMutations([
          'UPDATE_KEY'
        ]),
        //carousels
        carouselButton() {
          //this.$refs.carousel.slideTo(this.carouselData)
          // console.log(this.carouselData, " Carousel Number");
        },
        slidePrev() {
          this.$refs.carousel.slidePrev();
        },
        slideNext() {
          this.$refs.carousel.slideNext();
        },
        updateCarousel(payload) {
          this.myCarouselData = payload.currentSlide;
        },
        //toggle true/false on open close button
        toggleMe: function() {
          this.toggle = !this.toggle;
        },
        updateChart() {
          for(let i = this.job; i < this.job.length; i++) {
            this.chartData = i.featureResults
            console.log("BEEP BEEP BEEP", this.chartData)
          }
        }

      },
      computed: {
        // graphData () { //not working
        //   const data = []
        //   data.push(this.job.featureResults)
        //   return data
        // },

        //store
      ...mapState([
            'headerData',
            'jobNumber',
            'longJobNumber',
            'opNumber',
            'componentKey',
            'baseURL',
            'chart',
            'collapsedHeader',
            //map api
            'job',
            // 'chartData'
          ]),
      },
      created () {
        this.updateChart()
        this.$store.dispatch('loadData') // dispatch loading
      },
      mounted () {

      }
    }
</script>
