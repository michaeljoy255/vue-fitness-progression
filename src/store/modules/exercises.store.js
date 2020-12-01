import ExerciseService from '../../services/exercise.service.js'
import Defaults from '../../services/defaults.service.js'
import ExerciseContainer from '../../classes/ExerciseContainer.js'

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
    await ExerciseService.saveExercises(state.exerciseContainer)
  },

  async load({ commit }) {
    const exerciseContainer = await ExerciseService.getExercises()
    commit('SET_EXERCISES', exerciseContainer)
  },

  async clear({ commit }) {
    commit('CLEAR_STATE')
  },

  async loadDefaults({ commit }) {
    const exercises = await Defaults.getExercises()
    await ExerciseService.saveExercises(exercises)
    commit('SET_EXERCISES', exercises)
  },
}

export const getters = {
  isReady(state) {
    return ExerciseContainer.isExerciseContainer(state.exerciseContainer)
  },
}
