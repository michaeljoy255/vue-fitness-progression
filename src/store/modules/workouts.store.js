import WorkoutService from '../../services/workout.service.js'
import Defaults from '../../services/defaults.service.js'

export const namespaced = true

const initDefaultState = () => {
  return {
    isInitialized: false,
    workoutContainer: null,
  }
}

export const state = () => initDefaultState()

export const mutations = {
  SET_IS_INITIALIZED(state, boolean) {
    state.isInitialized = !!boolean
  },
  SET_WORKOUTS(state, workouts) {
    state.workoutContainer = workouts
  },
  CLEAR_STATE(state) {
    Object.assign(state, initDefaultState())
  },
}

export const actions = {
  async loadExercisesFromStorage({ commit }) {
    const workoutContainer = await WorkoutService.getWorkouts()
    commit('SET_WORKOUTS', workoutContainer)
  },

  async saveWorkouts({ state }) {
    await WorkoutService.saveWorkouts(state.workoutContainer)
  },

  async setDefaults({ commit }) {
    const workouts = await Defaults.getWorkouts()
    commit('SET_WORKOUTS', workouts)
  },

  async clearState({ commit }) {
    commit('CLEAR_STATE')
  },
}

export const getters = {}
