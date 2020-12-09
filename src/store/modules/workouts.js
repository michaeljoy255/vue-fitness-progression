import Workout from '../../models/Workout.js'
import { getDefaultWorkouts } from '../../utils/defaults.js'
import { StorageError } from '../../utils/errors.js'
import { getLocalStorage, setLocalStorage } from '../../utils/storage.js'

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
    try {
      setLocalStorage('workouts', state.workouts)
    } catch (error) {
      throw new StorageError(error)
    }
  },

  async fetch({ commit }) {
    try {
      const data = getLocalStorage('workouts')
      if (data) {
        const workouts = data.map((i) => new Workout(i))
        commit('SET_WORKOUTS', workouts)
      }
    } catch (error) {
      throw new StorageError(error)
    }
  },

  async fetchDefaults({ commit, dispatch }) {
    try {
      await commit('SET_WORKOUTS', await getDefaultWorkouts())
      await dispatch('workouts/save', null, { root: true })
    } catch (error) {
      throw new StorageError(error)
    }
  },

  async delete({ dispatch }) {
    localStorage.removeItem('workouts')
    dispatch('workouts/clearState', null, { root: true })
  },

  async clearState({ commit }) {
    commit('CLEAR_STATE')
  },
}

export const getters = {
  isReady: (state) => {
    return (
      Workout.isArrayOfWorkouts(state.workouts) && state.workouts.length > 0
    )
  },

  findNameById: (state) => (id) => {
    return state.workouts.find((i) => i.id === id).name
  },
}
