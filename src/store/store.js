import Vue from 'vue'
import Vuex from 'vuex'
import * as exercise from './modules/exercise.store.js'
import * as workout from './modules/workout.store.js'
import * as activeExerciseRecords from './modules/active-exercise-records.store.js'
import * as activeWorkoutRecord from './modules/active-workout-record.store.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    async initApp({ dispatch }) {
      await dispatch('exercise/getExercises')
      await dispatch('workout/getWorkouts')

      // await dispatch('exercise/setDefaults') // temp
      // await dispatch('workout/setDefaults') // temp
    },
  },
  getters: {},
  modules: {
    exercise,
    workout,
    activeExerciseRecords,
    activeWorkoutRecord,
  },
})
