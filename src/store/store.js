import Vue from 'vue'
import Vuex from 'vuex'
import * as exercises from './modules/exercises.js'
import * as workouts from './modules/workouts.js'
import * as activeExercises from './modules/active-exercises.js'
import * as activeWorkout from './modules/active-workout.js'
import * as exerciseRecords from './modules/exercise-records.js'
import * as workoutRecords from './modules/workout-records.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    async initApp({ dispatch }) {
      const promises = [dispatch('exercises/fetch'), dispatch('workouts/fetch')]
      await Promise.all(promises)
    },
  },
  getters: {},
  modules: {
    exercises,
    workouts,
    activeExercises,
    activeWorkout,
    exerciseRecords,
    workoutRecords,
  },
})
