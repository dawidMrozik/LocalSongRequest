import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isSideMenuOpen: false,
    queue: []
  },
  mutations: {
    toggleSideMenu: function(state) {
      state.isSideMenuOpen = !state.isSideMenuOpen
    }
  },
  actions: {}
})
