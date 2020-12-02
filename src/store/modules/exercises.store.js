import { saveExercises, getExercises } from '../../services/exercise.service.js'
import { getDefaultExercises } from '../../services/defaults.service.js'
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
    await saveExercises(state.exerciseContainer)
  },

  async load({ commit }) {
    const exerciseContainer = await getExercises()
    commit('SET_EXERCISES', exerciseContainer)
  },

  async clear({ commit }) {
    commit('CLEAR_STATE')
  },

  async loadDefaults({ commit }) {
    const exercises = await getDefaultExercises()
    await saveExercises(exercises)
    commit('SET_EXERCISES', exercises)
  },
}

export const getters = {
  isReady(state) {
    return ExerciseContainer.isExerciseContainer(state.exerciseContainer)
  },
}
