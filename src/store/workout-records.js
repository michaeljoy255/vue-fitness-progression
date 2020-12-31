import WorkoutRecord from '../models/WorkoutRecord.js'
import {
  setLocalStorage,
  getLocalStorage,
} from '../utils/store/local-storage.js'

export const namespaced = true

const initDefaultState = () => {
  return {
    workoutRecords: [],
  }
}

export const state = () => initDefaultState()

export const mutations = {
  SET_WORKOUT_RECORDS(state, records) {
    state.workoutRecords = records
  },
  CLEAR_STATE(state) {
    Object.assign(state, initDefaultState())
  },
}

export const actions = {
  async add({ state, commit, dispatch }, recordsToAdd) {
    // Or use a getter to pull the records you want to add???
    const allRecords = [...state.workoutRecords, ...recordsToAdd]
    await commit('SET_WORKOUT_RECORDS', allRecords)
    await dispatch('workoutRecords/save', null, { root: true })
  },

  async save({ state }) {
    saveWorkoutRecordsToLocalStorage(state.workoutRecords)
  },

  async fetch({ commit }) {
    const workoutRecords = fetchWorkoutRecordsFromLocalStorage()
    commit('SET_WORKOUT_RECORDS', workoutRecords)
  },

  async delete({ dispatch }) {
    deleteWorkoutsRecordsFromLocalStorage()
    dispatch('workoutRecords/clearState', null, { root: true })
  },

  async clearState({ commit }) {
    commit('CLEAR_STATE')
  },
}

export const getters = {}

/*
PRIVATE FUNCTIONS
*/

function saveWorkoutRecordsToLocalStorage(records) {
  setLocalStorage('workoutRecords', records)
}

function fetchWorkoutRecordsFromLocalStorage() {
  const data = getLocalStorage('workoutRecords')
  if (data) return data.map((i) => new WorkoutRecord(i))
  return []
}

function deleteWorkoutsRecordsFromLocalStorage() {
  localStorage.removeItem('workoutRecords')
}
