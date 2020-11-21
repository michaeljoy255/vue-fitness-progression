import ExerciseService from '../../services/exercise.service.js'
import Defaults from '../../services/defaults.service.js'

export const namespaced = true

const initDefaultState = () => {
  return {
    dataFetched: false,
    exercises: null,
  }
}

export const state = () => initDefaultState()

export const mutations = {
  SET_DATA_FETCHED(state, boolean) {
    state.dataFetched = !!boolean
  },
  SET_EXERCISES(state, exercises) {
    state.exercises = exercises
  },
  CLEAR_STATE(state) {
    Object.assign(state, initDefaultState())
  },
}

export const actions = {
  async get({ commit }) {
    const exercises = await ExerciseService.getExercises()
    commit('SET_EXERCISES', exercises)
    commit('SET_DATA_FETCHED', true)
  },

  async setDefaults({ commit }) {
    const exercises = await Defaults.getExercises()
    commit('SET_EXERCISES', exercises)
  },
}

export const getters = {}
