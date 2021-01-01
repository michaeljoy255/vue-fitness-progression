import { ENTITY } from '../../constants/globals.js'
import { setLocalStorage, getLocalStorage } from './local-storage.js'
import { getDefaultExercises, getDefaultWorkouts } from './defaults.js'

export const entityActions = (entity) => {
  return {
    async save({ state }) {
      setLocalStorage(entity, state[entity])
    },
    async delete({ commit }) {
      localStorage.removeItem(entity)
      commit('CLEAR_STATE')
    },
    async fetch({ commit }) {
      commit('SET', getLocalStorage(entity))
    },
    async useDefaults({ state, commit }) {
      commit('SET', getDefaultsForEntity(entity))
      setLocalStorage(entity, state[entity])
    },
  }
}

function getDefaultsForEntity(entity) {
  switch (entity) {
    case ENTITY.exercises:
      return getDefaultExercises()
    case ENTITY.workouts:
      return getDefaultWorkouts()
    default:
      return null
  }
}
