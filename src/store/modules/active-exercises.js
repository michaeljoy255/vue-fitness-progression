import ExerciseRecord from '../../models/ExerciseRecord.js'
import {
  saveActiveExercisesToLocalStorage,
  fetchActiveExercisesFromLocalStorage,
  deleteActiveExercisesFromLocalStorage,
} from '../../utils/store/local-storage.js'

export const namespaced = true

const initDefaultState = () => {
  return {
    activeExercises: [],
  }
}

export const state = () => initDefaultState()

export const mutations = {
  SET_ACTIVE_EXERCISES(state, container) {
    state.activeExercises = container
  },
  CLEAR_STATE(state) {
    Object.assign(state, initDefaultState())
  },
}

export const actions = {
  async save({ commit }, workoutExercises) {
    const exercises = workoutExercises.map(
      (i) => new ExerciseRecord({ exerciseId: i.id })
    )
    saveActiveExercisesToLocalStorage(exercises)
    commit('SET_ACTIVE_EXERCISES', exercises)
  },

  async fetch({ commit }) {
    const exercises = fetchActiveExercisesFromLocalStorage()
    commit('SET_ACTIVE_EXERCISES', exercises)
  },

  async delete({ dispatch }) {
    deleteActiveExercisesFromLocalStorage()
    dispatch('activeExercises/clearState', null, { root: true })
  },

  async clearState({ commit }) {
    commit('CLEAR_STATE')
  },
}

export const getters = {
  isReady(state) {
    return (
      ExerciseRecord.isArrayOfExerciseRecords(state.activeExercises) &&
      state.activeExercises.length > 0
    )
  },
}

// findByDate(date) {
//   return null
// }
// findNewest() {
//   return null
// }
// findOldest() {
//   return null
// }
// findBetweenDates(date1, date2) {
//   return null
// }
