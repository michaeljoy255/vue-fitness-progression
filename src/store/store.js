import Vue from 'vue'
import Vuex from 'vuex'
import * as exercises from './exercises.js'
import * as workouts from './workouts.js'
import * as activeExerciseRecords from './active-exercise-records.js'
import * as activeWorkoutRecords from './active-workout-records.js'
import * as historyExerciseRecords from './history-exercise-records.js'
import * as historyWorkoutRecords from './history-workout-records.js'
import { combinedStoreActions } from '../utils/store/actions.js'
import { combinedStoreGetters } from '../utils/store/getters.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    ...combinedStoreActions(),
  },
  getters: {
    ...combinedStoreGetters(),
  },
  modules: {
    exercises,
    workouts,
    activeExerciseRecords,
    activeWorkoutRecords,
    historyExerciseRecords,
    historyWorkoutRecords,
  },
})
