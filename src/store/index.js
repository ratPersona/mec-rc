import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jobNumber: '118318',
    opNumber: '5',
    jobInfo: {
      jobNumber: '',
      opNumber: ''
    }
  },
  getters: {

  },
  mutations: {
    UPDATE_JOB: (state, job) => {
      state.jobNumber = job;
    },
    UPDATE_OP: (state, op) => {
      state.opNumber = op;
      // state.jobInfo.opNumber = payload.newOp;
    }
  },
  actions: {
  },
  modules: {
  }
})
