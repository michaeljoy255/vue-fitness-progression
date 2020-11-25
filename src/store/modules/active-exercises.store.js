import ExerciseRecord from '../../classes/ExerciseRecord.js'
import ExerciseRecordContainer from '../../classes/ExerciseRecordContainer.js'
import ExerciseService from '../../services/exercise.service.js'

export const namespaced = true

const initDefaultState = () => {
  return {
    isLoading: true,
    activeExerciseRecordContainer: null,
  }
}

export const state = () => initDefaultState()

export const mutations = {
  SET_IS_LOADING(state, boolean) {
    state.isLoading = !!boolean
  },
  SET_ACTIVE_EXERCISES(state, container) {
    state.activeExerciseRecordContainer = container
  },
  CLEAR_STATE(state) {
    Object.assign(state, initDefaultState())
  },
}

export const actions = {
  async create({ commit }, workoutExercises) {
    const exerciseRecordsArray = workoutExercises
      .toArray()
      .map((i) => new ExerciseRecord({ exerciseId: i.id }))
    const activeExerciseRecordContainer = new ExerciseRecordContainer().fromArray(
      exerciseRecordsArray
    )
    await ExerciseService.saveActiveExercises(activeExerciseRecordContainer)
    commit('SET_ACTIVE_EXERCISES', activeExerciseRecordContainer)
    commit('SET_IS_LOADING', false)
  },

  async clearState({ commit }) {
    commit('CLEAR_STATE')
  },
}

export const getters = {}
