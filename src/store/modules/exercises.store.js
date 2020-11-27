import ExerciseService from '../../services/exercise.service.js'
import Defaults from '../../services/defaults.service.js'

export const namespaced = true

const initDefaultState = () => {
  return {
    isLoading: true,
    isInitialized: false,
    exerciseContainer: null,
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
  SET_EXERCISES(state, exercises) {
    state.exerciseContainer = exercises
  },
  CLEAR_STATE(state) {
    Object.assign(state, initDefaultState())
  },
}

export const actions = {
  async getExercises({ commit }) {
    const exerciseContainer = await ExerciseService.getExercises()
    commit('SET_EXERCISES', exerciseContainer)
    commit('SET_IS_LOADING', false)
  },

  async saveExercises({ state }) {
    await ExerciseService.saveExercises(state.exerciseContainer)
  },

  async setDefaults({ commit }) {
    const exercises = await Defaults.getExercises()
    commit('SET_EXERCISES', exercises)
    commit('SET_IS_LOADING', false)
  },

  async clearState({ commit }) {
    commit('CLEAR_STATE')
  },
}

export const getters = {}
