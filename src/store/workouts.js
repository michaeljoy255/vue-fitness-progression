import { entityMutations } from '../utils/store/mutations.js'
import { entityActions } from '../utils/store/actions.js'
import { entityGetters, activityGetters } from '../utils/store/getters.js'
import { ENTITY } from '../constants/globals.js'

export const namespaced = true

const defaultState = () => {
  return { [ENTITY.workouts]: null }
}

export const state = defaultState()

export const mutations = {
  ...entityMutations(defaultState(), ENTITY.workouts),
}

export const actions = {
  ...entityActions(ENTITY.workouts),
}

export const getters = {
  ...entityGetters(ENTITY.workouts),
  ...activityGetters(ENTITY.exercises),
}
