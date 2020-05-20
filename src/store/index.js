import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    longJobNumber: '18118318',
    jobNumber: '118318',
    opNumber: '5',
    chart: true,
    componentKey: 0,
    collapsedHeader: true,
    baseURL: "https://mytest.mecinc.com/v2/api/Runchart/", //runchart url
    // baseURL: "http://mec-testnet-01/v2/api/Runchart/", //runchart url

    job: []
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

    API: (state, job) => {
      state.job = job
    }
  },

  actions: {
    loadData({commit, state}) {
      axios.get(state.baseURL + state.jobNumber + '/' + state.opNumber).then((response) => {
        commit('API', response.data.runchartFeatures)
        console.log(state.job)
        // commit('changeLoadingState', false)
      })
    }
  },

  modules: {
  }
})
