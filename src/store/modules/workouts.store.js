import WorkoutService from '../../services/workout.service.js'
import Defaults from '../../services/defaults.service.js'
import WorkoutContainer from '../../classes/WorkoutContainer.js'

export const namespaced = true

const initDefaultState = () => {
  return {
    isLoading: true,
    isInitialized: false,
    workoutContainer: null,
  }
}

export const state = () => initDefaultState()

export const mutations = {
  SET_IS_LOADING(state, boolean) {
    state.isLoading = !!boolean
  },
  SET_WORKOUTS(state, workouts) {
    state.workoutContainer = workouts
  },
  CLEAR_STATE(state) {
    Object.assign(state, initDefaultState())
  },
}

export const actions = {
  async getWorkouts({ commit }) {
    const workoutContainer = await WorkoutService.getWorkouts()
    commit('SET_WORKOUTS', workoutContainer)
    commit('SET_IS_LOADING', false)
  },

  async saveWorkouts({ state }) {
    await WorkoutService.saveWorkouts(state.workoutContainer)
  },

  async setDefaults({ commit }) {
    const workouts = await Defaults.getWorkouts()
    commit('SET_WORKOUTS', workouts)
    commit('SET_IS_LOADING', false)
  },

  async clearState({ commit }) {
    commit('CLEAR_STATE')
  },
}

export const getters = {
  getWorkoutsArray(state) {
    if (WorkoutContainer.isWorkoutContainer(state.workoutContainer)) {
      return state.workoutContainer.toArray()
    } else {
      return []
    }
  },

  getWorkoutsContainer(state) {
    if (WorkoutContainer.isWorkoutContainer(state.workoutContainer)) {
      return state.workoutContainer
    } else {
      return null
    }
  },

  getWorkoutNameById: (state) => (id) => {
    if (!state.isLoading && state.workoutContainer) {
      const workout = state.workoutContainer.findById(id)
      return workout.name
    } else {
      return ''
    }
  },
}
