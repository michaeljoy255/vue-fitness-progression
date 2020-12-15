import ExerciseRecord from '../../models/ExerciseRecord.js'
import {
  setLocalStorage,
  getLocalStorage,
} from '../../utils/store/local-storage.js'

export const namespaced = true

const initDefaultState = () => {
  return {
    activeExercises: [],
  }
}

export const state = () => initDefaultState()

export const mutations = {
  SET_ACTIVE_EXERCISES(state, records) {
    state.activeExercises = records
  },
  CLEAR_STATE(state) {
    Object.assign(state, initDefaultState())
  },
}

export const actions = {
  async create({ commit }, workoutExerciseIds) {
    const exercises = workoutExerciseIds.map(
      (i) => new ExerciseRecord({ exerciseId: i.id })
    )
    saveActiveExercisesToLocalStorage(exercises)
    commit('SET_ACTIVE_EXERCISES', exercises)
  },

  async save({ state }) {
    saveActiveExercisesToLocalStorage(state.activeExercises)
  },

  async fetch({ commit }) {
    const exercises = fetchActiveExercisesFromLocalStorage()
    commit('SET_ACTIVE_EXERCISES', exercises)
  },

  async delete({ dispatch }) {
    deleteActiveExercisesFromLocalStorage()
    dispatch('activeExercises/clearState', null, { root: true })
  },

  async clearState({ commit }) {
    commit('CLEAR_STATE')
  },
}

export const getters = {
  isReady(state) {
    return ExerciseRecord.isExerciseRecordArrayWithData(state.activeExercises)
  },
}

/*
PRIVATE FUNCTIONS
*/

function saveActiveExercisesToLocalStorage(activeExercises) {
  setLocalStorage('activeExercises', activeExercises)
}

function fetchActiveExercisesFromLocalStorage() {
  const data = getLocalStorage('activeExercises')
  if (data) return data.map((i) => new ExerciseRecord(i))
  return []
}

function deleteActiveExercisesFromLocalStorage() {
  localStorage.removeItem('activeExercises')
}
