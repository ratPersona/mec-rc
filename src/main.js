import Vue from 'vue'
import Vuex from "vuex";
import axios from 'axios'
import Moment from 'vue-moment'
import Hooper from 'hooper';
import VueMatchHeights from 'vue-match-heights';
// import ApexCharts from 'apexcharts'
import VueGoogleCharts from 'vue-google-charts'

// import Chart from "frappe-charts"

// import VueFusionCharts from 'vue-fusioncharts';
// import FusionCharts from 'fusioncharts';
// import Charts from 'fusioncharts/fusioncharts.charts'

// import VueAgile from 'vue-agile'
//import VueSlickCarousel from 'vue-slick-carousel'
// import Slick from 'vue-slick';
//import VueCarousel from 'vue-carousel'


import App from './App.vue'
import router from './router'
import store from './store'

 // Vue.use(ApexCharts);
 Vue.use(Vuex);
 Vue.use(Moment);
 Vue.use(Hooper);
 Vue.use(VueMatchHeights);
 Vue.use(VueGoogleCharts);
 // Vue.use(VueFusionCharts, FusionCharts, Charts);

Vue.config.productionTip = false

new Vue({
  router,
  Hooper,
  VueMatchHeights,
  VueGoogleCharts,
  axios,
  // ApexCharts,
  Moment,
  store,
  render: h => h(App)
}).$mount('#app')
