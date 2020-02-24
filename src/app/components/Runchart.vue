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
        <div class="flex"><h1>Run Chart #:</h1> <span>{{ job.runchartNumber }}</span></div>
        <div class="flex"><h2>Run Chart Revision:</h2> <span>{{}}</span></div>
      </div>
      <div v-if="toggle">
        <div class="details-middle border open">
          <ul class="flex-container value-list">
            <!-- <li class="flex" v-for="value in runchartData" :key="value">
              <h3>{{ value.title }} :</h3> <span>{{ value.value }}</span>
            </li> -->
            <li class="flex">
              <!-- <h3>{{ value.title }} :</h3> <span>{{ value.value }}</span> -->
              <!-- <h3>{{ detail.title }} :</h3> <span></span> -->
            </li>
          </ul>
        </div>
        <div class="details-bottom flex-container border open">
          <div class="flex"><h3>Job #:</h3> <span>12345</span></div>
          <div class="flex"><h3>Date :</h3> <span>00/00/0000</span></div>
          <div class="flex"><h3>Clock #:</h3> <span>123456</span></div>
        </div>
      </div>
      <div v-else></div>
    </article>

    <section class="runchart-buttons">
      <section class="button-list">
        <hooper group="group1" :settings="hooperSettings">
          <hooper-navigation slot="hooper-addons"></hooper-navigation>
          <slide class="runchart-button" v-for="number of slideNumbers" :key="number">
            <div>{{ number }}</div>
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
      <hooper group="group1" :settings="hooperSettings2">
        <slide v-for="detail of job" :key="detail" class="slide">
        <!-- <slide v-for="post of posts" :key="post" class="slide"> -->

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
          <div class="right attr-info">
            <div class="">
              <h2>Pass/Fail</h2>
              <input placeholder="Pass"><button>Add to Chart</button>
            </div>
          </div>
        </slide>
        <!-- <slide class="slide">
          <div class="left attr-details">
            left 2
          </div>
          <div class="right attr-info">
            right 2
          </div>
        </slide>
        <slide class="slide">
          <div class="left attr-details">
            left 3
          </div>
          <div class="right attr-info">
            right 3
          </div>
        </slide>
        <slide class="slide">
          <div class="left attr-details">
            left 4
          </div>
          <div class="right attr-info">
            right 4
          </div>
        </slide>
        <slide class="slide">
          <div class="left attr-details">
            left 5
          </div>
          <div class="right attr-info">
            right 5
          </div>
        </slide>
        <slide class="slide">
          <div class="left attr-details">
            left 6
          </div>
          <div class="right attr-info">
            right 6
          </div>
        </slide>
        <slide class="slide">
          <div class="left attr-details">
            left 7
          </div>
          <div class="right attr-info">
            right 7
          </div>
        </slide>
        <slide class="slide">
          <div class="left attr-details">
            left 8
          </div>
          <div class="right attr-info">
            right 8
          </div>
        </slide> -->
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


  // const API = axios.create({
  //   baseURL: 'http://mec-testnet-01/v2/api/Runchart'
  // })
  //
  // getDetails: params => API.get('/118318/5', params).then(params => {
  //   this.job = params.data
  //   this.slideNumbers = params.data.runchartFeatures.length
  //   console.log(this.job)
  // })

  export default {
    name: 'Runchart',
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

         job: '',
         post: '',
         slideNumbers: [],

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

           runchartData: [
             { title: "Drawn By", value: "Sam Nelson"},
             { title: "Date", value: "09/24/2020"},
             { title: "W/CTR", value: "1234"},
             { title: "Alt Route", value: "2"},
             { title: "Dept #", value: "4"},
             { title: "Oper #", value: "5"},
             { title: "Part #", value: "123456789 - Floor Cover Plate"},
           ],
         }
      },
    methods: {
      toggleMe: function() {
        this.toggle = !this.toggle;
      }
    },
    mounted () {
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
        this.job = response.data.runchartFeatures
        this.slideNumbers = response.data.runchartFeatures.length
        console.log(this.job)
      })
    }
  }
</script>
