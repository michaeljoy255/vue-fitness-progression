import { entityMutations } from '../utils/store/mutations.js'
import { entityActions, recordActions } from '../utils/store/actions.js'
import {
  entityGetters,
  recordGetters,
  workoutRecordGetters,
} from '../utils/store/getters.js'
import { ENTITY } from '../constants/globals.js'

const entity = ENTITY.workoutRecords // Entity type for curried functions
const defaultState = () => ({ [entity]: null })

export const namespaced = true
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
  ...workoutRecordGetters(entity),
}
