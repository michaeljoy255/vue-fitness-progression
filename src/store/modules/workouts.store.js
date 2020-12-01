import WorkoutService from '../../services/workout.service.js'
import Defaults from '../../services/defaults.service.js'
import WorkoutContainer from '../../classes/WorkoutContainer.js'

export const namespaced = true

const initDefaultState = () => {
  return {
    workoutContainer: null,
  }
}

export const state = () => initDefaultState()

export const mutations = {
  SET_WORKOUTS(state, workouts) {
    state.workoutContainer = workouts
  },
  CLEAR_STATE(state) {
    Object.assign(state, initDefaultState())
  },
}

export const actions = {
  async save({ state }) {
    await WorkoutService.saveWorkouts(state.workoutContainer)
  },

  async load({ commit }) {
    const workoutContainer = await WorkoutService.getWorkouts()
    commit('SET_WORKOUTS', workoutContainer)
  },

  async clear({ commit }) {
    commit('CLEAR_STATE')
  },

  async loadDefaults({ commit }) {
    const workouts = await Defaults.getWorkouts()
    await WorkoutService.saveWorkouts(workouts)
    commit('SET_WORKOUTS', workouts)
  },
}

export const getters = {
  isReady(state) {
    return WorkoutContainer.isWorkoutContainer(state.workoutContainer)
  },
}
