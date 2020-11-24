import WorkoutRecord from '../../classes/WorkoutRecord.js'

export const namespaced = true

const initDefaultState = () => {
  return {
    isReady: false,
    activeWorkoutRecord: null,
  }
}

export const state = () => initDefaultState()

export const mutations = {
  SET_IS_READY(state, boolean) {
    state.isReady = !!boolean
  },
  SET_ACTIVE_WORKOUT_RECORD(state, workoutRecord) {
    state.activeWorkoutRecord = workoutRecord
  },
  CLEAR_STATE(state) {
    Object.assign(state, initDefaultState())
  },
}

export const actions = {
  async create({ commit }, workoutId) {
    const activeWorkoutRecord = new WorkoutRecord({ id: workoutId })
    commit('SET_ACTIVE_WORKOUT_RECORD', activeWorkoutRecord)
    commit('SET_IS_READY', true)
  },

  async clearState({ commit }) {
    commit('CLEAR_STATE')
  },
}

export const getters = {}
