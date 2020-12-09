import WorkoutRecord from '../../models/WorkoutRecord.js'
import { StorageError } from '../../utils/errors.js'
import { getLocalStorage, setLocalStorage } from '../../utils/storage.js'

export const namespaced = true

const initDefaultState = () => {
  return {
    activeWorkout: null,
  }
}

export const state = () => initDefaultState()

export const mutations = {
  SET_ACTIVE_WORKOUT(state, record) {
    state.activeWorkout = record
  },
  CLEAR_STATE(state) {
    Object.assign(state, initDefaultState())
  },
}

export const actions = {
  async save({ commit }, workoutId) {
    try {
      const activeWorkout = new WorkoutRecord({ workoutId })
      setLocalStorage('activeWorkout', activeWorkout)
      commit('SET_ACTIVE_WORKOUT', activeWorkout)
    } catch (error) {
      throw new StorageError(error)
    }
  },

  async fetch({ commit }) {
    try {
      const data = getLocalStorage('activeWorkout')
      if (data) {
        const workoutRecord = new WorkoutRecord(data)
        commit('SET_ACTIVE_WORKOUT', workoutRecord)
      }
    } catch (error) {
      throw new StorageError(error)
    }
  },

  async delete({ dispatch }) {
    localStorage.removeItem('activeWorkout')
    dispatch('activeWorkout/clearState', null, { root: true })
  },

  async clearState({ commit }) {
    commit('CLEAR_STATE')
  },
}

export const getters = {
  isReady(state) {
    return WorkoutRecord.isWorkoutRecord(state.activeWorkout)
  },
}
