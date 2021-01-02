import { entityMutations } from '../utils/store/mutations.js'
import { entityActions, recordActions } from '../utils/store/actions.js'
import {
  entityGetters,
  recordGetters,
  exerciseRecordGetters,
} from '../utils/store/getters.js'
import { ENTITY } from '../constants/globals.js'

export const namespaced = true

const entity = ENTITY.exerciseRecords // Entity type for curried functions

const defaultState = () => {
  return { [entity]: null }
}

export const state = defaultState()

export const mutations = {
  ...entityMutations(defaultState(), entity),
}

export const actions = {
  ...entityActions(entity),
  ...recordActions(entity),
}

export const getters = {
  ...entityGetters(entity),
  ...recordGetters(entity),
  ...exerciseRecordGetters(entity),
}
