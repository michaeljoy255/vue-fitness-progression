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
      await Promise.all([
        dispatch('exercises/fetch'),
        dispatch('workouts/fetch'),
        dispatch('activeExercises/fetch'),
        dispatch('activeWorkout/fetch'),
        dispatch('exerciseRecords/fetch'),
        dispatch('workoutRecords/fetch'),
      ])
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
