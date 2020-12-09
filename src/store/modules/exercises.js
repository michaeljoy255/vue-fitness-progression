import Exercise from '../../models/Exercise.js'
import { getDefaultExercises } from '../../utils/defaults.js'
import { StorageError } from '../../utils/errors.js'
import { getLocalStorage, setLocalStorage } from '../../utils/storage.js'

export const namespaced = true

const initDefaultState = () => {
  return {
    exercises: [],
  }
}

export const state = () => initDefaultState()

export const mutations = {
  SET_EXERCISES(state, exercises) {
    state.exercises = exercises
  },
  CLEAR_STATE(state) {
    Object.assign(state, initDefaultState())
  },
}

export const actions = {
  async save({ state }) {
    try {
      setLocalStorage('exercises', state.exercises)
    } catch (error) {
      throw new StorageError(error)
    }
  },

  async fetch({ commit }) {
    try {
      const data = getLocalStorage('exercises')
      if (data) {
        const exercises = data.map((i) => new Exercise(i))
        commit('SET_EXERCISES', exercises)
      }
    } catch (error) {
      throw new StorageError(error)
    }
  },

  async fetchDefaults({ commit, dispatch }) {
    try {
      await commit('SET_EXERCISES', await getDefaultExercises())
      await dispatch('exercises/save', null, { root: true })
    } catch (error) {
      throw new StorageError(error)
    }
  },

  async delete({ dispatch }) {
    localStorage.removeItem('exercises')
    dispatch('exercises/clearState', null, { root: true })
  },

  async clearState({ commit }) {
    commit('CLEAR_STATE')
  },
}

export const getters = {
  isReady(state) {
    return (
      Exercise.isArrayOfExercises(state.exercises) && state.exercises.length > 0
    )
  },
}

// findByName(name) {
//   return this._items.filter((item) => item.name === name)
// }

// findByCategory(category) {
//   return this._items.filter((item) => item.category === category)
// }

// findByEquipment(equipment) {
//   return this._items.filter((item) => item.equipment === equipment)
// }
