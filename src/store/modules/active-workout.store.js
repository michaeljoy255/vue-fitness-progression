import WorkoutRecord from '../../classes/WorkoutRecord.js'
import WorkoutService from '../../services/workout.service.js'

export const namespaced = true

const initDefaultState = () => {
  return {
    isLoading: true,
    activeWorkoutRecord: null,
  }
}

export const state = () => initDefaultState()

export const mutations = {
  SET_IS_LOADING(state, boolean) {
    state.isLoading = !!boolean
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

  async clearState({ commit }) {
    commit('CLEAR_STATE')
  },
}

export const getters = {}
