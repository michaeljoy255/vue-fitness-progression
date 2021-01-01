import { entityMutations } from '../utils/store/mutations.js'
import { entityActions, activeRecordActions } from '../utils/store/actions.js'
import { entityGetters } from '../utils/store/getters.js'
import { ENTITY } from '../constants/globals.js'

export const namespaced = true

const defaultState = () => {
  return { [ENTITY.activeExerciseRecords]: null }
}

export const state = defaultState()

export const mutations = {
  ...entityMutations(defaultState(), ENTITY.activeExerciseRecords),
}

export const actions = {
  ...entityActions(ENTITY.activeExerciseRecords),
  ...activeRecordActions(ENTITY.activeExerciseRecords),
}

export const getters = {
  ...entityGetters(ENTITY.activeExerciseRecords),
}
