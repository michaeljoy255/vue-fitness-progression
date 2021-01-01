import { entityMutations } from '../utils/store/mutations.js'
import { entityActions } from '../utils/store/actions.js'
import { entityGetters, activityGetters } from '../utils/store/getters.js'
import { ENTITY } from '../constants/globals.js'

export const namespaced = true

const defaultState = () => {
  return { [ENTITY.exercises]: null }
}

export const state = defaultState()

export const mutations = {
  ...entityMutations(defaultState(), ENTITY.exercises),
}

export const actions = {
  ...entityActions(ENTITY.exercises),
}

export const getters = {
  ...entityGetters(ENTITY.exercises),
  ...activityGetters(ENTITY.exercises),
}
