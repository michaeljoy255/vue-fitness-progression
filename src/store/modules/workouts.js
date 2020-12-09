import WorkoutContainer from '../../models/WorkoutContainer.js'

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
    WorkoutContainer.saveWorkouts(state.workoutContainer)
  },

  async load({ commit }) {
    commit('SET_WORKOUTS', await WorkoutContainer.fetchWorkouts())
  },

  async clear({ commit }) {
    commit('CLEAR_STATE')
  },

  async loadDefaults({ commit }) {
    const workouts = await WorkoutContainer.fetchDefaultWorkouts()
    WorkoutContainer.saveWorkouts(workouts)
    commit('SET_WORKOUTS', workouts)
  },
}

export const getters = {
  isReady(state) {
    return WorkoutContainer.isWorkoutContainer(state.workoutContainer)
  },
}
