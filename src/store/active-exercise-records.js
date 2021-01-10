import { entityMutations } from '../utils/store/mutations.js'
import {
  databaseActions,
  entityActions,
  activeRecordActions,
  activeExerciseRecordActions,
} from '../utils/store/actions.js'
import { entityGetters } from '../utils/store/getters.js'
import { ENTITY } from '../constants/globals.js'

const entity = ENTITY.activeExerciseRecords
const defaultState = () => ({ [entity]: [] })

export const namespaced = true
export const state = defaultState()
export const mutations = {
  ...entityMutations(defaultState(), entity),
}
export const actions = {
  ...databaseActions(entity),
  ...entityActions(entity),
  ...activeRecordActions(entity),
  ...activeExerciseRecordActions(entity),
}
export const getters = {
  ...entityGetters(entity),
}
