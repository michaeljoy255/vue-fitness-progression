import Vue from 'vue'
import Vuex from 'vuex'
import * as exercise from './modules/exercise.js'
import * as workout from './modules/workout.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    exercise,
    workout,
  },
})
