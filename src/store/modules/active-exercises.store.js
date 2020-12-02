import ExerciseRecord from '../../classes/ExerciseRecord.js'
import ExerciseRecordContainer from '../../classes/ExerciseRecordContainer.js'
import {
  saveActiveExercises,
  getActiveExercises,
} from '../../services/exercise.service.js'

export const namespaced = true

const initDefaultState = () => {
  return {
    activeExerciseRecordContainer: null,
  }
}

export const state = () => initDefaultState()

export const mutations = {
  SET_ACTIVE_EXERCISES(state, container) {
    state.activeExerciseRecordContainer = container
  },
  CLEAR_STATE(state) {
    Object.assign(state, initDefaultState())
  },
}

export const actions = {
  async save({ commit }, workoutExercises) {
    const exerciseRecordsArray = workoutExercises
      .toArray()
      .map((i) => new ExerciseRecord({ exerciseId: i.id }))
    const activeExerciseRecordContainer = new ExerciseRecordContainer().fromArray(
      exerciseRecordsArray
    )
    await saveActiveExercises(activeExerciseRecordContainer)
    commit('SET_ACTIVE_EXERCISES', activeExerciseRecordContainer)
  },

  async load({ commit }) {
    commit('SET_ACTIVE_EXERCISES', await getActiveExercises())
  },

  async clear({ commit }) {
    commit('CLEAR_STATE')
  },
}

export const getters = {
  isReady(state) {
    return ExerciseRecordContainer.isExerciseRecordContainer(
      state.activeExerciseRecordContainer
    )
  },
}
