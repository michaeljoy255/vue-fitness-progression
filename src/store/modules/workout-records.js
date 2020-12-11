export const namespaced = true

const initDefaultState = () => {
  return {
    workoutRecords: [],
  }
}

export const state = () => initDefaultState()

export const mutations = {
  SET_WORKOUT_RECORDS(state, records) {
    state.workoutRecords = records
  },
  CLEAR_STATE(state) {
    Object.assign(state, initDefaultState())
  },
}

export const actions = {}

export const getters = {}
