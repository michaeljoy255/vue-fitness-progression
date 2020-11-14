export const namespaced = true

const initState = () => {
  // Check local storage for data
  // Load storage data if any found
  // Otherwise return empty
  return { workouts: [] }
}

export const state = () => initState()

export const mutations = {
  SET(state, workouts) {
    state.workouts = workouts
  },
  CLEAR(state) {
    Object.assign(state, initState())
  },
}

export const actions = {}

export const getters = {}
