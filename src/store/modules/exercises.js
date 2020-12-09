import ExerciseContainer from '../../models/ExerciseContainer.js'

export const namespaced = true

const initDefaultState = () => {
  return {
    exerciseContainer: null,
  }
}

export const state = () => initDefaultState()

export const mutations = {
  SET_EXERCISES(state, exercises) {
    state.exerciseContainer = exercises
  },
  CLEAR_STATE(state) {
    Object.assign(state, initDefaultState())
  },
}

export const actions = {
  async save({ state }) {
    ExerciseContainer.saveExercises(state.exerciseContainer)
  },

  async load({ commit }) {
    commit('SET_EXERCISES', await ExerciseContainer.fetchExercises())
  },

  async clear({ commit }) {
    commit('CLEAR_STATE')
  },

  async loadDefaults({ commit }) {
    const exercises = await ExerciseContainer.fetchDefaultExercises()
    ExerciseContainer.saveExercises(exercises)
    commit('SET_EXERCISES', exercises)
  },
}

export const getters = {
  isReady(state) {
    return ExerciseContainer.isExerciseContainer(state.exerciseContainer)
  },
}
