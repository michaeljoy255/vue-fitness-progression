import { entityMutations } from '../utils/store/mutations.js'
import { entityActions, historyRecordActions } from '../utils/store/actions.js'
import {
  entityGetters,
  recordGetters,
  historyWorkoutGetters,
} from '../utils/store/getters.js'
import { ENTITY } from '../constants/globals.js'

export const namespaced = true

const defaultState = () => {
  return { [ENTITY.historyWorkoutRecords]: null }
}

export const state = defaultState()

export const mutations = {
  ...entityMutations(defaultState(), ENTITY.historyWorkoutRecords),
}

export const actions = {
  ...entityActions(ENTITY.historyWorkoutRecords),
  ...historyRecordActions(ENTITY.historyWorkoutRecords),
}

export const getters = {
  ...entityGetters(ENTITY.historyWorkoutRecords),
  ...recordGetters(ENTITY.historyWorkoutRecords),
  ...historyWorkoutGetters(ENTITY.historyWorkoutRecords),
}
