import Vue from 'vue'
import Vuex from 'vuex'
import * as exercise from './modules/exercise.store.js'
import * as workout from './modules/workout.store.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    async initApp({ dispatch }) {
      dispatch('exercise/get')
      dispatch('workout/get')

      dispatch('exercise/setDefaults') // temp
      dispatch('workout/setDefaults') // temp
    },
  },
  getters: {},
  modules: {
    exercise,
    workout,
  },
})
