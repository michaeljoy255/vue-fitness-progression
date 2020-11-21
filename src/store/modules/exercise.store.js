import ExerciseService from '../../services/exercise.service.js'
import Defaults from '../../services/defaults.service.js'
import ExerciseContainer from '../../classes/ExerciseContainer.js'

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

  exportTesting({ state }) {
    const exportedExercises = ExerciseContainer.exportData(state.exercises)
    console.log('exportedExercises:Object', exportedExercises)

    localStorage.setItem('exercises', JSON.stringify(exportedExercises))
  },

  importTesting() {
    const importedExercises = JSON.parse(localStorage.getItem('exercises'))
    console.log('importedExercises:Object', importedExercises)
  },
}

export const getters = {}
