import WorkoutRecord from '../../models/WorkoutRecord.js'
import {
  saveActiveWorkoutToLocalStorage,
  fetchActiveWorkoutFromLocalStorage,
  deleteActiveWorkoutFromLocalStorage,
} from '../../utils/store/local-storage.js'

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
  async create({ commit }, workoutId) {
    const newActiveWorkout = new WorkoutRecord({ workoutId })
    saveActiveWorkoutToLocalStorage(newActiveWorkout)
    commit('SET_ACTIVE_WORKOUT', newActiveWorkout)
  },

  async save({ state }) {
    saveActiveWorkoutToLocalStorage(state.activeWorkout)
  },

  async fetch({ commit }) {
    const workoutRecord = fetchActiveWorkoutFromLocalStorage()
    commit('SET_ACTIVE_WORKOUT', workoutRecord)
  },

  async delete({ dispatch }) {
    deleteActiveWorkoutFromLocalStorage()
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
