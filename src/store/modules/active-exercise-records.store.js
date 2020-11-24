export const namespaced = true

const initDefaultState = () => {
  return {
    isReady: false,
    activeExerciseRecords: null,
  }
}

export const state = () => initDefaultState()

export const mutations = {
  SET_IS_READY(state, boolean) {
    state.isReady = !!boolean
  },
  SET_ACTIVE_EXERCISE_RECORDS(state, exerciseRecords) {
    state.activeExerciseRecords = exerciseRecords
  },
  CLEAR_STATE(state) {
    Object.assign(state, initDefaultState())
  },
}

export const actions = {
  async clearState({ commit }) {
    commit('CLEAR_STATE')
  },
}

export const getters = {}
