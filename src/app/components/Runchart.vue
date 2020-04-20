<style scoped lang="scss">
  @import '../scss/runchart.scss';
</style>

<template>
  <main class="runchart-main-view">
    <!-- <div v-for="feature of rcFeatureType" :key="feature">
      {{ feature.featureType + ' '  + feature.description }}
    </div> -->
    <section v-if="chart">
      <article class="runchart-details" v-bind="job">
        <button role="button" class="toggle-me-btn" @click="toggleMe()">
          <svg v-if="toggle" class="icon open"><use href="#close"></use></svg>
          <svg class="icon closed" v-else><use href="#open"></use></svg>
        </button>
        <div class="details-top flex-container">
          <div class="flex"><h1>Run Chart #:</h1> <span>{{ jobSpec.runchartNumber }}</span></div>
          <div class="flex"><h2>Run Chart Revision:</h2> <span>{{ jobSpec.runchartRevision }}</span></div>
        </div>
        <div v-if="toggle">
          <div class="details-middle border open">
            <ul class="flex-container value-list">
              <li class="flex"><h3>Drawn By :</h3> <span>{{ jobSpec.createdByName }}</span></li>
              <li class="flex"><h3>W/CTR :</h3> <span>{{ jobSpec.workCenter }}</span></li>
              <li class="flex"><h3>Alt Route :</h3> <span>{{ jobSpec.routeCode }}</span></li>
              <li class="flex"><h3>Dept # :</h3> <span>{{ jobSpec.department }}</span></li>
              <li class="flex"><h3>Oper # :</h3> <span>{{ jobSpec.operation }}</span></li>
              <li class="flex"><h3>Part # :</h3> <span>{{ jobSpec.partNumber }}</span></li>
            </ul>
          </div>
          <div class="details-bottom flex-container border open">
            <div class="flex"><h3>Job #:</h3> <span>{{ this.jobNumber }}</span></div>
            <div class="flex"><h3>Date :</h3> <span>{{ jobSpec.createdDate | moment("DD/MM/YYYY") }}</span></div>
            <div class="flex"><h3>Clock #:</h3> <span>{{ jobSpec.createdBy }}</span></div>
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
                <div class="graph-container" v-if="graph">
                  <header class="content-header">
                    <h2 class="runchart-header">Pass/Fail</h2>
                    <div class="input-container">
                      <svg class="info-tooltip"><use href="#info"></use></svg>
                      <input placeholder="#Passing Amount" v-model="numberInput" @keypress="isNumber($event)">
                      <button class="runchart-add-btn">Add to Chart</button>
                    </div>
                  </header>
                  <GChart class="runchart-graph" type="BubbleChart" :data="graphData2" :options="graphOptions" />
                </div>
                <div v-else>
                  <header class="content-header">
                    <h2 class="runchart-header">Pass/Fail</h2>
                    <div class="input-container">
                      <svg class="info-tooltip"><use href="#info"></use></svg>
                      <select>
                        <option selected>Pass</option>
                        <option>Fail</option>
                      </select>
                      <button class="runchart-add-btn">Add to Chart</button>
                    </div>
                  </header>
                  <div class="pass-fail-grid">
                    <div v-repeat="passFail">
                      {{ status }}
                      {{ date }}
                      {{ initials }}
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
  import { mapState, mapMutations } from 'vuex';
  import { Hooper, Slide, Navigation as HooperNavigation, Pagination as HooperPagination } from 'hooper';

  export default {
      name: 'Runchart',
      components: {
        Hooper,
        Slide,
        HooperPagination,
        HooperNavigation,
      },
      data: function () {
         return {
           //chart detailsTop
           job: '',
           jobSpec: '',
           passFail: [
             { status: 'pass', date: '12/12/1212', initials: 'SN' }
           ],
           // chartAuthor: '',
           rcFeatureType: [],
           //other
           toggle: false,
           post: '',
           graph: true,
           slideNumbers: [],

           //for graph charts
           graphData: [
                   ['ID', 'Life Expectancy', 'Fertility Rate', 'Region',     'Population'],
                   ['CAN',    80.66,              1.67,      'North America',  33739900],
                   ['DEU',    79.84,              1.36,      'Europe',         81902307],
                   ['DNK',    78.6,               1.84,      'Europe',         5523095],
                   ['EGY',    72.73,              2.78,      'Middle East',    79716203],
                   ['GBR',    80.05,              2,         'Europe',         61801570],
                   ['IRN',    72.49,              1.7,       'Middle East',    73137148],
                   ['IRQ',    68.09,              4.77,      'Middle East',    31090763],
                   ['ISR',    81.55,              2.96,      'Middle East',    7485600],
                   ['RUS',    68.6,               1.54,      'Europe',         141850000],
                   ['USA',    78.09,              2.05,      'North America',  307007000]
                 ],
           graphData2: [
             ['test', 'test2', 'test3'],
             ['first attr', 19, 1],
             ['second test', 10, 2],
             ['third test', 12, 4]

           ],
           graphOptions: {
             chart: {
               title: 'Correlation between life expectancy, fertility rate ' +
                              'and population of some world countries (2010)',
               hAxis: {title: 'Life Expectancy'},
               vAxis: {title: 'Fertility Rate'},
               bubble: {
                 textStyle: { fontSize: 11 },
                 opacity: { opacity: 1.0 }
               },
               colorAxis: {
                 colors: '#dedede'
               },
             }
           },
           numberInput: '',

           //yes/no
           pass: '',
           fail: '',
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
        isNumber: function(evt) {
          evt = (evt) ? evt : window.event;
          var charCode = (evt.which) ? evt.which : evt.keyCode;
          if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
            evt.preventDefault();
          } else {
            return true;
          }
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
      },
      computed: {
        //store
      ...mapState([
            'jobNumber',
            'opNumber',
            'componentKey',
            'baseURL',
            'chart',
            'collapsedHeader'
          ]),
      },
      mounted () {
        //Store

        //static api call
        axios.get('http://mec-testnet-01/v2/api/RunchartFeatureType').then(response => {
          this.rcFeatureType = response.data
        });

        //api call
        axios.get( this.baseURL + this.jobNumber + '/' + this.opNumber ).then(response => {
          this.jobSpec = response.data
          this.job = response.data.runchartFeatures
          this.slideNumbers = response.data.runchartFeatures.length
          // this.chartAuthor = response.data.createdByName
        });
      }
    }
</script>
