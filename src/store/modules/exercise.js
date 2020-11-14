export const namespaced = true

const initState = () => {
  // Check local storage for data
  // Load storage data if any found
  // Otherwise return empty
  return { exercises: [] }
}

export const state = () => initState()

export const mutations = {
  SET(state, exercises) {
    state.exercises = exercises
  },
  CLEAR(state) {
    Object.assign(state, initState())
  },
}

export const actions = {}

export const getters = {}
