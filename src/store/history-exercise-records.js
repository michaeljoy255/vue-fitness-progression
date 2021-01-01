import { entityMutations } from '../utils/store/mutations.js'
import { entityActions } from '../utils/store/actions.js'
import { entityGetters } from '../utils/store/getters.js'
import { ENTITY } from '../constants/globals.js'

export const namespaced = true

const defaultState = () => {
  return { [ENTITY.historyExerciseRecords]: null }
}

export const state = defaultState()

export const mutations = {
  ...entityMutations(defaultState(), ENTITY.historyExerciseRecords),
}

export const actions = {
  ...entityActions(ENTITY.historyExerciseRecords),

  async add({ state, commit, dispatch }, recordsToAdd) {
    // Or use a getter to pull the records you want to add???
    const allRecords = [...state.exerciseRecords, ...recordsToAdd]
    await commit('SET', allRecords)
    await dispatch('exerciseRecords/save', null, { root: true })
  },
}

export const getters = {
  ...entityGetters(ENTITY.historyExerciseRecords),
}
