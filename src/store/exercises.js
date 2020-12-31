import Exercise from '../models/Exercise.js'
import { getDefaultExercises } from '../utils/store/defaults.js'
import {
  setLocalStorage,
  getLocalStorage,
} from '../utils/store/local-storage.js'

export const namespaced = true

const initDefaultState = () => {
  return {
    exercises: [],
  }
}

export const state = () => initDefaultState()

export const mutations = {
  SET_EXERCISES(state, exercises) {
    state.exercises = exercises
  },
  CLEAR_STATE(state) {
    Object.assign(state, initDefaultState())
  },
}

export const actions = {
  async save({ state }) {
    saveExercisesToLocalStorage(state.exercises)
  },

  async fetch({ commit }) {
    const exercises = fetchExercisesFromLocalStorage()
    commit('SET_EXERCISES', exercises)
  },

  async fetchDefaults({ commit, dispatch }) {
    await commit('SET_EXERCISES', getDefaultExercises())
    await dispatch('exercises/save', null, { root: true })
  },

  async delete({ dispatch }) {
    deleteExercisesFromLocalStorage()
    dispatch('exercises/clearState', null, { root: true })
  },

  async clearState({ commit }) {
    commit('CLEAR_STATE')
  },
}

export const getters = {
  isReady(state) {
    return Exercise.isExerciseArrayWithData(state.exercises)
  },
}

/*
PRIVATE FUNCTIONS
*/

function saveExercisesToLocalStorage(exercises) {
  setLocalStorage('exercises', exercises)
}

function fetchExercisesFromLocalStorage() {
  const data = getLocalStorage('exercises')
  if (data) return data.map((i) => new Exercise(i))
  return []
}

function deleteExercisesFromLocalStorage() {
  localStorage.removeItem('exercises')
}
