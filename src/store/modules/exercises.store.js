import ExerciseService from '../../services/exercise.service.js'
import Defaults from '../../services/defaults.service.js'
import ExerciseContainer from '../../classes/ExerciseContainer.js'

export const namespaced = true

const initDefaultState = () => {
  return {
    isInitialized: false,
    exercises: null,
  }
}

export const state = () => initDefaultState()

export const mutations = {
  SET_IS_INITIALIZED(state, boolean) {
    state.isInitialized = !!boolean
  },
  SET_EXERCISES(state, exercises) {
    state.exercises = exercises
  },
  CLEAR_STATE(state) {
    Object.assign(state, initDefaultState())
  },
}

export const actions = {
  async getExercises({ commit }) {
    const exercises = await ExerciseService.getExercises()
    commit('SET_EXERCISES', exercises)
    commit('SET_IS_INITIALIZED', true)
  },

  async saveExercises({ state }) {
    await ExerciseService.saveExercises(state.exercises)
  },

  async setDefaults({ commit }) {
    const exercises = await Defaults.getExercises()
    commit('SET_EXERCISES', exercises)
    commit('SET_IS_INITIALIZED', true)
  },

  async clearState({ commit }) {
    commit('CLEAR_STATE')
  },
}

export const getters = {
  getExercises(state) {
    if (ExerciseContainer.isExerciseContainer(state.exercises)) {
      return state.exercises.toArray()
    } else {
      return []
    }
  },
}
