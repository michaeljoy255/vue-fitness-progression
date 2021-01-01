import ExerciseRecord from '../models/ExerciseRecord.js'
import { entityMutations } from '../utils/store/mutations.js'
import { entityActions } from '../utils/store/actions.js'
import { entityGetters } from '../utils/store/getters.js'
import { ENTITY } from '../constants/globals.js'

export const namespaced = true

const defaultState = () => {
  return { [ENTITY.activeExerciseRecords]: null }
}

export const state = defaultState()

export const mutations = {
  ...entityMutations(defaultState(), ENTITY.activeExerciseRecords),
}

export const actions = {
  ...entityActions(ENTITY.activeExerciseRecords),

  async create({ commit, dispatch }, workoutExerciseIds) {
    const newActiveExercises = workoutExerciseIds.map(
      (i) => new ExerciseRecord({ exerciseId: i.id })
    )
    commit('SET', newActiveExercises)
    await dispatch('activeExerciseRecords/save', newActiveExercises, {
      root: true,
    })
  },
}

export const getters = {
  ...entityGetters(ENTITY.activeExerciseRecords),
}
