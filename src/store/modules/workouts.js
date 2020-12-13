import Workout from '../../models/Workout.js'
import { getDefaultWorkouts } from '../../utils/store/defaults.js'
import {
  setLocalStorage,
  getLocalStorage,
} from '../../utils/store/local-storage.js'

export const namespaced = true

const initDefaultState = () => {
  return {
    workouts: [],
  }
}

export const state = () => initDefaultState()

export const mutations = {
  SET_WORKOUTS(state, workouts) {
    state.workouts = workouts
  },
  CLEAR_STATE(state) {
    Object.assign(state, initDefaultState())
  },
}

export const actions = {
  async save({ state }) {
    saveWorkoutsToLocalStorage(state.workouts)
  },

  async fetch({ commit }) {
    const workouts = fetchWorkoutsFromLocalStorage()
    commit('SET_WORKOUTS', workouts)
  },

  async fetchDefaults({ commit, dispatch }) {
    await commit('SET_WORKOUTS', getDefaultWorkouts())
    await dispatch('workouts/save', null, { root: true })
  },

  async delete({ dispatch }) {
    deleteWorkoutsFromLocalStorage()
    dispatch('workouts/clearState', null, { root: true })
  },

  async clearState({ commit }) {
    commit('CLEAR_STATE')
  },
}

export const getters = {
  isReady: (state) => {
    return Workout.isWorkoutArrayWithData(state.workouts)
  },

  findById: (state) => (id) => {
    return Workout.findById(state.workouts, id)
  },

  findNameById: (state) => (id) => {
    return Workout.findById(state.workouts, id).name
  },
}

/*
PRIVATE FUNCTIONS
*/

function saveWorkoutsToLocalStorage(workouts) {
  setLocalStorage('workouts', workouts)
}

function fetchWorkoutsFromLocalStorage() {
  const data = getLocalStorage('workouts')
  if (data) return data.map((i) => new Workout(i))
  return []
}

function deleteWorkoutsFromLocalStorage() {
  localStorage.removeItem('workouts')
}
