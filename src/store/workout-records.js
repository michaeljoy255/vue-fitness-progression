import { entityMutations } from '../utils/store/mutations.js'
import { entityActions, recordActions } from '../utils/store/actions.js'
import {
  databaseActions,
  entityGetters,
  recordGetters,
  workoutRecordGetters,
} from '../utils/store/getters.js'
import { ENTITY } from '../constants/globals.js'

const entity = ENTITY.workoutRecords
const defaultState = () => ({ [entity]: [] })

export const namespaced = true
export const state = defaultState()
export const mutations = {
  ...entityMutations(defaultState(), entity),
}
export const actions = {
  ...databaseActions(entity),
  ...entityActions(entity),
  ...recordActions(entity),
}
export const getters = {
  ...entityGetters(entity),
  ...recordGetters(entity),
  ...workoutRecordGetters(entity),
}
