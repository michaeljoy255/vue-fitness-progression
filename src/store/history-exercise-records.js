import { entityMutations } from '../utils/store/mutations.js'
import { entityActions, historyRecordActions } from '../utils/store/actions.js'
import {
  entityGetters,
  recordGetters,
  historyExerciseGetters,
} from '../utils/store/getters.js'
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
  ...historyRecordActions(ENTITY.historyExerciseRecords),
}

export const getters = {
  ...entityGetters(ENTITY.historyExerciseRecords),
  ...recordGetters(ENTITY.historyExerciseRecords),
  ...historyExerciseGetters(ENTITY.historyExerciseRecords),
}
