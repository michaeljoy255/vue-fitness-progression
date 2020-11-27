import WorkoutRecord from '../../classes/WorkoutRecord.js'
import WorkoutService from '../../services/workout.service.js'

export const namespaced = true

const initDefaultState = () => {
  return {
    isLoading: true,
    isInitialized: false,
    activeWorkoutRecord: new WorkoutRecord(),
  }
}

export const state = () => initDefaultState()

export const mutations = {
  SET_IS_LOADING(state, boolean) {
    state.isLoading = !!boolean
  },
  SET_IS_INITIALIZED(state, boolean) {
    state.isInitialized = !!boolean
  },
  SET_ACTIVE_WORKOUT(state, record) {
    state.activeWorkoutRecord = record
  },
  CLEAR_STATE(state) {
    Object.assign(state, initDefaultState())
  },
}

export const actions = {
  async create({ commit }, workoutId) {
    const activeWorkoutRecord = new WorkoutRecord({ workoutId })
    await WorkoutService.saveActiveWorkout(activeWorkoutRecord)
    commit('SET_ACTIVE_WORKOUT', activeWorkoutRecord)
    commit('SET_IS_LOADING', false)
  },

  async getActiveWorkout({ commit }) {
    const workoutRecord = await WorkoutService.getActiveWorkout()
    commit('SET_ACTIVE_WORKOUT', workoutRecord)
    commit('SET_IS_INITIALIZED', true)
    commit('SET_IS_LOADING', false)
  },

  async clearState({ commit }) {
    commit('CLEAR_STATE')
  },
}

export const getters = {
  isReady(state) {
    return state.isInitialized && !state.isLoading
  },
}
