import Vue from 'vue'
import Vuex from 'vuex'
import * as exercises from './exercises.js'
import * as workouts from './workouts.js'
import * as activeExercises from './active-exercises.js'
import * as activeWorkout from './active-workout.js'
import * as exerciseRecords from './exercise-records.js'
import * as workoutRecords from './workout-records.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
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
