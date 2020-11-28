import Vue from 'vue'
import Vuex from 'vuex'
import * as exercises from './modules/exercises.store.js'
import * as workouts from './modules/workouts.store.js'
import * as activeExercises from './modules/active-exercises.store.js'
import * as activeWorkout from './modules/active-workout.store.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    async initApp({ dispatch }) {
      await dispatch('exercises/initExercises')
      await dispatch('workouts/initWorkouts')

      await dispatch('activeWorkout/initActiveWorkout')
      await dispatch('activeExercises/initActiveExercises')
    },
  },
  getters: {},
  modules: {
    exercises,
    workouts,
    activeExercises,
    activeWorkout,
  },
})
