import { entityMutations } from '../utils/store/mutations.js'
import { entityActions, activeRecordActions } from '../utils/store/actions.js'
import { entityGetters } from '../utils/store/getters.js'
import { ENTITY } from '../constants/globals.js'

const entity = ENTITY.activeWorkoutRecords // Entity type for curried functions
const defaultState = () => ({ [entity]: null })

export const namespaced = true
export const state = defaultState()
export const mutations = {
  ...entityMutations(defaultState(), entity),
}
export const actions = {
  ...entityActions(entity),
  ...activeRecordActions(entity),
}
export const getters = {
  ...entityGetters(entity),
}
