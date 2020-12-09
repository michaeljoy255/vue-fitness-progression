import WorkoutRecord from '../../models/WorkoutRecord.js'

export const namespaced = true

const initDefaultState = () => {
  return {
    activeWorkoutRecord: null,
  }
}

export const state = () => initDefaultState()

export const mutations = {
  SET_ACTIVE_WORKOUT(state, record) {
    state.activeWorkoutRecord = record
  },
  CLEAR_STATE(state) {
    Object.assign(state, initDefaultState())
  },
}

export const actions = {
  async save({ commit }, workoutId) {
    const activeWorkoutRecord = new WorkoutRecord({ workoutId })
    await WorkoutRecord.saveActiveWorkout(activeWorkoutRecord)
    commit('SET_ACTIVE_WORKOUT', activeWorkoutRecord)
  },

  async load({ commit }) {
    commit('SET_ACTIVE_WORKOUT', await WorkoutRecord.fetchActiveWorkout())
  },

  async clear({ commit }) {
    commit('CLEAR_STATE')
  },
}

export const getters = {
  isReady(state) {
    return WorkoutRecord.isWorkoutRecord(state.activeWorkoutRecord)
  },
}
