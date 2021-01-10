import { entityMutations } from '../utils/store/mutations.js'
import { entityActions } from '../utils/store/actions.js'
import {
  databaseActions,
  entityGetters,
  activityGetters,
  exerciseGetters,
} from '../utils/store/getters.js'
import { ENTITY } from '../constants/globals.js'

const entity = ENTITY.exercises
const defaultState = () => ({ [entity]: [] })

export const namespaced = true
export const state = defaultState()
export const mutations = {
  ...entityMutations(defaultState(), entity),
}
export const actions = {
  ...databaseActions(entity),
  ...entityActions(entity),
}
export const getters = {
  ...entityGetters(entity),
  ...activityGetters(entity),
  ...exerciseGetters(entity),
}
