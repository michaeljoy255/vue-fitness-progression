export const namespaced = true

const initDefaultState = () => {
  return {
    exerciseRecords: [],
  }
}

export const state = () => initDefaultState()

export const mutations = {
  SET_EXERCISE_RECORDS(state, records) {
    state.exerciseRecords = records
  },
  CLEAR_STATE(state) {
    Object.assign(state, initDefaultState())
  },
}

export const actions = {}

export const getters = {}
