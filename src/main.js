import Vue from 'vue'

import VueCarousel from 'vue-carousel'
import VueAgile from 'vue-agile'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(VueAgile);
Vue.use(VueCarousel);

Vue.config.productionTip = false

new Vue({
  router,
  VueCarousel,
  VueAgile,
  store,
  render: h => h(App)
}).$mount('#app')
