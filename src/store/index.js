import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jobInfo: {
      jobNumber: 'Job #',
      opNumber: 'Op #'
    }
  },
  mutations: {
    updateJobNumber(state, payload){
      state.jobInfo.jobNumber = payload;
      // state.jobInfo.jobNumber = payload.newJob;

    },
    updateOpNumber(state, payload){
      state.jobInfo.opNumber = payload;
      // state.jobInfo.opNumber = payload.newOp;
    }
  },
  actions: {
  },
  modules: {
  }
})
