import WorkoutService from '../../services/workout.service.js'
import Defaults from '../../services/defaults.service.js'
import WorkoutContainer from '../../classes/WorkoutContainer.js'

export const namespaced = true

const initDefaultState = () => {
  return {
    isInitialized: false,
    workouts: null,
  }
}

export const state = () => initDefaultState()

export const mutations = {
  SET_IS_INITIALIZED(state, boolean) {
    state.isInitialized = !!boolean
  },
  SET_WORKOUTS(state, workouts) {
    state.workouts = workouts
  },
  CLEAR_STATE(state) {
    Object.assign(state, initDefaultState())
  },
}

export const actions = {
  async getWorkouts({ commit }) {
    const workouts = await WorkoutService.getWorkouts()
    commit('SET_WORKOUTS', workouts)
    commit('SET_IS_INITIALIZED', true)
  },

  async saveWorkouts({ state }) {
    await WorkoutService.saveWorkouts(state.workouts)
  },

  async setDefaults({ commit }) {
    const workouts = await Defaults.getWorkouts()
    commit('SET_WORKOUTS', workouts)
    commit('SET_IS_INITIALIZED', true)
  },

  async clearState({ commit }) {
    commit('CLEAR_STATE')
  },
}

export const getters = {
  getWorkoutsArray(state) {
    if (WorkoutContainer.isWorkoutContainer(state.workouts)) {
      return state.workouts.toArray()
    } else {
      return []
    }
  },
}
