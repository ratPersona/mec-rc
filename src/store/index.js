import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import Chart from 'chart.js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headerData: [],
    longJobNumber: '18118318',
    jobNumber: '118318',
    opNumber: '5',
    chart: true,
    componentKey: 0,
    collapsedHeader: true,
    baseURL: "https://mytest.mecinc.com/v2/api/Runchart/", //runchart url
    // baseURL: "http://mec-testnet-01/v2/api/Runchart/", //runchart url

    job: [],
    chartData: {}
  },

  getters: {

  },

  mutations: {
    UPDATE_JOB: (state, job) => {
      state.jobNumber = job;
    },
    UPDATE_OP: (state, op) => {
      state.opNumber = op;
    },
    UPDATE_HEADER: (state, value) => {
      state.collapsedHeader = value;
    },
    UPDATE_KEY: (state, key) => {
      state.componentKey = key;
    },
    RC_HEADER: (state, headerData) => {
      state.headerData = headerData
    },
    API: (state, job) => {
      state.job = job
    },
    // CHART_DATA: (state, chartData) => {
    //   state.chartData = chartData
    // }
  },

  actions: {
    loadData({commit, state}) {
      axios.get(state.baseURL + state.jobNumber + '/' + state.opNumber).then((response) => {
        commit('RC_HEADER', response.data)
        commit('API', response.data.runchartFeatures)
      })
    }
  },

  modules: {
  }
})
