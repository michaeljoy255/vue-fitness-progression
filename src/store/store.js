import Vue from 'vue'
import Vuex from 'vuex'
import * as exercises from './exercises.js'
import * as workouts from './workouts.js'
import * as activeExerciseRecords from './active-exercise-records.js'
import * as activeWorkoutRecord from './active-workout-record.js'
import * as historyExerciseRecords from './history-exercise-records.js'
import * as historyWorkoutRecords from './history-workout-records.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    exercises,
    workouts,
    activeExerciseRecords,
    activeWorkoutRecord,
    historyExerciseRecords,
    historyWorkoutRecords,
  },
})
