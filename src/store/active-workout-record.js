import WorkoutRecord from '../models/WorkoutRecord.js'
import { entityMutations } from '../utils/store/mutations.js'
import { entityActions } from '../utils/store/actions.js'
import { entityGetters } from '../utils/store/getters.js'
import { ENTITY } from '../constants/globals.js'

export const namespaced = true

const defaultState = () => {
  return { [ENTITY.activeWorkoutRecord]: null }
}

export const state = defaultState()

export const mutations = {
  ...entityMutations(defaultState(), ENTITY.activeWorkoutRecord),
}

export const actions = {
  ...entityActions(ENTITY.activeWorkoutRecord),

  async create({ commit, dispatch }, workoutId) {
    const newActiveWorkout = new WorkoutRecord({ workoutId })
    commit('SET', newActiveWorkout)
    await dispatch('activeWorkoutRecord/save', newActiveWorkout, { root: true })
  },
}

export const getters = {
  ...entityGetters(ENTITY.activeWorkoutRecord),
}
