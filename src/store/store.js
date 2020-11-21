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
      // await dispatch('exercise/get')
      // await dispatch('workout/get')

      await dispatch('exercise/setDefaults') // temp
      await dispatch('workout/setDefaults') // temp

      // await dispatch('exercise/exportTesting')
      // await dispatch('workout/exportTesting')

      await dispatch('exercise/importTesting')
    },
  },
  getters: {},
  modules: {
    exercise,
    workout,
  },
})
