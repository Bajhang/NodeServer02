import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// Vues is used as a plugin here

import state from './methods/state'
import * as actions from './methods/actions'
import * as mutations from './methods/mutations'
import * as getters from './methods/getters'

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions 
  
});

