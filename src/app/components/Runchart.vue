<style scoped lang="scss">
  @import '../scss/runchart.scss';
</style>

<template>
  <main class="runchart-main-view">
    <article class="runchart-details" v-bind="job">
      <button role="button" class="toggle-me-btn" @click="toggleMe()">
        <svg v-if="toggle" class="icon open"><use href="#close"></use></svg>
        <svg class="icon closed" v-else><use href="#open"></use></svg>
      </button>
      <!-- v-for="detail of job" :key="detail" -->
      <div class="details-top flex-container">
        <div class="flex"><h1>Run Chart #:</h1> <span>{{ jobSpec.runchartNumber }}</span></div>
        <div class="flex"><h2>Run Chart Revision:</h2> <span>{{ jobSpec.runchartRevision }}</span></div>
      </div>
      <div v-if="toggle">
        <div class="details-middle border open">
          <ul class="flex-container value-list">
            <li class="flex"><h3>Drawn By :</h3> <span>NAME HERE***</span></li>
            <li class="flex"><h3>Date :</h3> <span>{{ jobSpec.createdDate | moment("DD/MM/YYYY") }}</span></li>
            <li class="flex"><h3>W/CTR :</h3> <span>{{ jobSpec.workCenter }}</span></li>
            <li class="flex"><h3>Alt Route :</h3> <span>{{ jobSpec.routeCode }}</span></li>
            <li class="flex"><h3>Dept # :</h3> <span>{{ jobSpec.department }}</span></li>
            <li class="flex"><h3>Oper # :</h3> <span>{{ jobSpec.operation }}</span></li>
            <li class="flex"><h3>Part # :</h3> <span>{{ jobSpec.partNumber }}</span></li>
          </ul>
        </div>
        <div class="details-bottom flex-container border open">
          <div class="flex"><h3>Job #:</h3> <span>####</span></div>
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
          <slide class="runchart-button" v-for="number of slideNumbers" :key="number">
            <div @click="carouselButton()">{{ number }}</div>
          </slide>
          <!-- <slide class="runchart-button"><div>2</div></slide>
          <slide class="runchart-button"><div>3</div></slide>
          <slide class="runchart-button"><div>4</div></slide>
          <slide class="runchart-button"><div>5</div></slide>
          <slide class="runchart-button"><div>6</div></slide>
          <slide class="runchart-button"><div>7</div></slide>
          <slide class="runchart-button"><div>8</div></slide> -->
          <!-- <hooper-progress slot="hooper-addons"></hooper-progress> -->
        </hooper>
      </section>
    </section>

    <section class="carousel-container">
      <hooper group="group1" ref="carousel" :settings="hooperSettings2">
        <!-- <hooper group="group1" ref="carousel" :settings="hooperSettings2" @slide="updateCarousel"> -->

        <slide v-for="detail of job" :key="detail" class="slide">
          <div class="left feature-details">
            <h2>Feature {{ detail.featureNumber }} : Attr {{ detail.featureType }}</h2>
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
              <div v-if="chart">
                <h2>Pass/Fail</h2>
                <input placeholder="Pass"><button>Add to Chart</button>
                <!-- <div id="#chart"></div> -->
                <!-- <fusioncharts :type="type" :width="width" :height="height" :dataFormat="dataFormat" :dataSource="dataSource">
                </fusioncharts> -->

                <GChart
                  type="BubbleChart"
                  :data="chartData"
                  :options="chartOptions"
                />
              </div>

              <div v-else>
              </div>

            </div>
          </div>
        </slide>
        <hooper-pagination slot="hooper-addons"></hooper-pagination>
      </hooper>
    </section>
  </main>
</template>


<script>
//TODO: HOOPER WINS! NOTES - Vue Carousel works but no native "asNavFor", Vue Agile is deprecated, Vue Slick doesn't work properly, Vue Slick Carousel is...broken
import 'hooper/dist/hooper.css';
import axios from 'axios';
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation,
  // Progress as HooperProgress,
  Pagination as HooperPagination } from 'hooper';
  // import Chart from "frappe-charts"
  // import { Line } from 'vue-chartjs'

  // const API = axios.create({
  //   baseURL: 'http://mec-testnet-01/v2/api/Runchart'
  // })
  //
  // getDetails: params => API.get('/118318/5', params).then(params => {
  //   this.job = params.data
  //   this.slideNumbers = params.data.runchartFeatures.length
  //   console.log(this.job)
  // })
  // chart.export();

  export default {
    name: 'Runchart',
    // extends: Line,
    // props: ['chartdata', 'options'],
    components: {
      Hooper,
      Slide,
      // HooperProgress,
      HooperPagination,
      HooperNavigation,
    },
     data: function () {
       return {
         toggle: false,
         chart: true,
         job: '',
         jobSpec: '',
         post: '',
         slideNumbers: [],

         chartData: [
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
         chartOptions: {
           chart: {
             title: 'Correlation between life expectancy, fertility rate ' +
                            'and population of some world countries (2010)',
                     hAxis: {title: 'Life Expectancy'},
                     vAxis: {title: 'Fertility Rate'},
                     bubble: {textStyle: {fontSize: 11}}
           }
         },
         //slideIndex: this.slideNumbers[i],
          hooperSettings: {
            itemsToShow: 4,
            //itemsToSlide: 4,
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
      carouselButton() {
        //this.$refs.carousel.slideTo(this.carouselData)
        console.log(this.carouselData, " Carousel Number");
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
      }
    },
    mounted () {
      // this.renderChart(this.chartdata, this.options);
      // axios.get(`http://jsonplaceholder.typicode.com/posts`).then(response => {
      //   this.posts = response.data
      // })
      //const api = 'http://mec-testnet-01/v2/api/Runchart'

      // axios.get(`${api}/118318/5`).then(resonse => {
      //   this.job = response.data
      //   this.slideNumbers = response.data.runchartFeatures.length
      //   console.log(this.job)
      // })

      axios.get(`http://mec-testnet-01/v2/api/Runchart/118318/5`).then(response => {
        this.jobSpec = response.data
        this.job = response.data.runchartFeatures
        this.slideNumbers = response.data.runchartFeatures.length
        //this.carouselData =
        console.log(this.job)
      })
    }
  }
</script>
