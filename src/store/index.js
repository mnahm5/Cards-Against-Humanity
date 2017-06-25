import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = {
  userData: JSON.parse(localStorage.getItem('userData')) || {
    username: null,
    gameId: null
  }
}
const mutations = {
  setUserData: function (state) {
    localStorage.setItem('userData', JSON.stringify(state.userData))
    console.log(localStorage.getItem('userData'))
  }
}
const actions = {
  saveUserData: ({ commit, dispatch, state }) => {
    // touch last saved user data
    commit('setUserData')
  }
}
const getters = {
  userData: state => {
    return state.userData
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
