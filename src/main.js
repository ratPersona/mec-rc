import Vue from 'vue'
//import VueCarousel from 'vue-carousel'
import Hooper from 'hooper';
// import VueAgile from 'vue-agile'
//import VueSlickCarousel from 'vue-slick-carousel'
// import Slick from 'vue-slick';


import App from './App.vue'
import router from './router'
import store from './store'

// Vue.use(VueAgile);
 // Vue.use(VueCarousel);
 Vue.use(Hooper);
//Vue.use(VueSlickCarousel);


Vue.config.productionTip = false

new Vue({
  router,
  Hooper,
  // Slide,
  // VueCarousel,
  // VueAgile,
  //VueSlickCarousel,
  // Slick,
  store,
  render: h => h(App)
}).$mount('#app')
