import WorkoutService from '../../services/workout.service.js'
import Defaults from '../../services/defaults.service.js'

export const namespaced = true

const initDefaultState = () => {
  return {
    dataFetched: false,
    workouts: null,
  }
}

export const state = () => initDefaultState()

export const mutations = {
  SET_DATA_FETCHED(state, boolean) {
    state.dataFetched = !!boolean
  },
  SET_WORKOUTS(state, workouts) {
    state.workouts = workouts
  },
  CLEAR_STATE(state) {
    Object.assign(state, initDefaultState())
  },
}

export const actions = {
  async get({ commit }) {
    const workouts = await WorkoutService.getWorkouts()
    commit('SET_WORKOUTS', workouts)
    commit('SET_DATA_FETCHED', true)
  },

  async setDefaults({ commit }) {
    const workouts = await Defaults.getWorkouts()
    commit('SET_WORKOUTS', workouts)
  },
}

export const getters = {}
