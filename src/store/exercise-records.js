import ExerciseRecord from '../models/ExerciseRecord.js'
import {
  setLocalStorage,
  getLocalStorage,
} from '../utils/store/local-storage.js'

export const namespaced = true

const initDefaultState = () => {
  return {
    exerciseRecords: [],
  }
}

export const state = () => initDefaultState()

export const mutations = {
  SET_EXERCISE_RECORDS(state, records) {
    state.exerciseRecords = records
  },
  CLEAR_STATE(state) {
    Object.assign(state, initDefaultState())
  },
}

export const actions = {
  async add({ state, commit, dispatch }, recordsToAdd) {
    // Or use a getter to pull the records you want to add???
    const allRecords = [...state.exerciseRecords, ...recordsToAdd]
    await commit('SET_EXERCISE_RECORDS', allRecords)
    await dispatch('exerciseRecords/save', null, { root: true })
  },

  async save({ state }) {
    saveExerciseRecordsToLocalStorage(state.exerciseRecords)
  },

  async fetch({ commit }) {
    const exerciseRecords = fetchExerciseRecordsFromLocalStorage()
    commit('SET_EXERCISE_RECORDS', exerciseRecords)
  },

  async delete({ dispatch }) {
    deleteExerciseRecordsFromLocalStorage()
    dispatch('exerciseRecords/clearState', null, { root: true })
  },

  async clearState({ commit }) {
    commit('CLEAR_STATE')
  },
}

export const getters = {}

/*
PRIVATE FUNCTIONS
*/

function saveExerciseRecordsToLocalStorage(records) {
  setLocalStorage('exerciseRecords', records)
}

function fetchExerciseRecordsFromLocalStorage() {
  const data = getLocalStorage('exerciseRecords')
  if (data) return data.map((i) => new ExerciseRecord(i))
  return []
}

function deleteExerciseRecordsFromLocalStorage() {
  localStorage.removeItem('exerciseRecords')
}
