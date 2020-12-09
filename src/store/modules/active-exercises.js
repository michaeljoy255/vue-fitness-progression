import ExerciseRecord from '../../models/ExerciseRecord.js'
import { StorageError } from '../../utils/errors.js'
import { getLocalStorage, setLocalStorage } from '../../utils/storage.js'

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
    try {
      const exercises = workoutExercises.map(
        (i) => new ExerciseRecord({ exerciseId: i.id })
      )
      setLocalStorage('activeExercises', exercises)
      commit('SET_ACTIVE_EXERCISES', exercises)
    } catch (error) {
      throw new StorageError(error)
    }
  },

  async fetch({ commit }) {
    try {
      const data = getLocalStorage('activeExercises')
      if (data) {
        const exercises = data.map((i) => new ExerciseRecord(i))
        commit('SET_ACTIVE_EXERCISES', exercises)
      }
    } catch (error) {
      throw new StorageError(error)
    }
  },

  async delete({ dispatch }) {
    localStorage.removeItem('activeExercises')
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
