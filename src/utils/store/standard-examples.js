/**
 * @todo
 * Trying to determine if this would be a better way to implement my store functions...
 * @todo
 * DefaultsFactory
 * ConceptFactory
 */
import { CONCEPT } from '../../constants/globals.js'
import { setLocalStorage, getLocalStorage } from './local-storage.js'
import { getDefaultExercises, getDefaultWorkouts } from './defaults.js'

export const standardMutations = (defaultState, concept) => {
  return {
    SET(state, payload) {
      state[concept] = payload
    },
    CLEAR_STATE(state) {
      Object.assign(state, defaultState)
    },
  }
}

export const standardActions = (concept) => {
  return {
    async save({ state }) {
      setLocalStorage(concept, state[concept])
    },
    async delete({ commit }) {
      localStorage.removeItem(concept)
      commit('CLEAR_STATE')
    },
    async fetch({ commit }) {
      commit('SET', getLocalStorage(concept))
    },
  }
}

export const defaultActions = (concept) => {
  return {
    async useDefaults({ state, commit }) {
      commit('SET', getDefaultsForConcept(concept)) // ---use DefaultsFactory?
      setLocalStorage(concept, state[concept])
    },
  }
}

// ---use ConceptsFactory?
// export const recordActions = (concept) => {
//   return {
//     async create({ commit }, payload) {},
//   }
// }

// async function create({ commit }, workoutExerciseIds) {
//   const exercises = workoutExerciseIds.map(
//     (i) => new ExerciseRecord({ exerciseId: i.id })
//   )
//   saveActiveExercisesToLocalStorage(exercises)
//   commit('SET_ACTIVE_EXERCISES', exercises)
// }

/*
PRIVATE FUNCTIONS
*/

function getDefaultsForConcept(concept) {
  switch (concept) {
    case CONCEPT.exercises:
      return getDefaultExercises()
    case CONCEPT.workouts:
      return getDefaultWorkouts()
    default:
      return null
  }
}
