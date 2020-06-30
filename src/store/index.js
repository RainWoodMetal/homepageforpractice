import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 579,
    homedata:{},
  },
  mutations: {
    addHomeData(state, val){
      //是否加数据验证
      state.homedata = val;
    }
  },
  actions: {
  },
  modules: {
  }
})
