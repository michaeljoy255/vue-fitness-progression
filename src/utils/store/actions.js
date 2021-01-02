import ExerciseRecord from '../../models/ExerciseRecord.js'
import WorkoutRecord from '../../models/WorkoutRecord.js'
import { ENTITY } from '../../constants/globals.js'
import { setLocalStorage, getLocalStorage } from './local-storage.js'
import { createDefaultExercises, createDefaultWorkouts } from './defaults.js'

export const combinedStoreActions = () => {
  return {
    async initAppState({ dispatch }) {
      await Promise.all([
        dispatch(`${ENTITY.exercises}/fetch`),
        dispatch(`${ENTITY.workouts}/fetch`),
        dispatch(`${ENTITY.exerciseRecords}/fetch`),
        dispatch(`${ENTITY.workoutRecords}/fetch`),
        dispatch(`${ENTITY.activeExerciseRecords}/fetch`),
        dispatch(`${ENTITY.activeWorkoutRecords}/fetch`),
      ])
    },
    async clearStateAndStorage({ dispatch }) {
      await Promise.all([
        dispatch(`${ENTITY.exercises}/delete`),
        dispatch(`${ENTITY.workouts}/delete`),
        dispatch(`${ENTITY.exerciseRecords}/delete`),
        dispatch(`${ENTITY.workoutRecords}/delete`),
        dispatch(`${ENTITY.activeExerciseRecords}/delete`),
        dispatch(`${ENTITY.activeWorkoutRecords}/delete`),
      ])
    },
    async loadDefaults({ dispatch }) {
      await Promise.all([
        dispatch(`${ENTITY.exercises}/useDefaults`),
        dispatch(`${ENTITY.workouts}/useDefaults`),
      ])
    },
    async fetchActiveRecords({ dispatch }) {
      await Promise.all([
        dispatch(`${ENTITY.activeExerciseRecords}/fetch`),
        dispatch(`${ENTITY.activeWorkoutRecords}/fetch`),
      ])
    },
    async createActiveRecords({ dispatch }, payload) {
      await Promise.all([
        dispatch(`${ENTITY.activeExerciseRecords}/create`, payload.exerciseIds),
        dispatch(`${ENTITY.activeWorkoutRecords}/create`, payload.workoutId),
      ])
    },
    async clearActiveRecords({ dispatch }) {
      await Promise.all([
        dispatch(`${ENTITY.activeExerciseRecords}/delete`),
        dispatch(`${ENTITY.activeWorkoutRecords}/delete`),
      ])
    },
  }
}

export const entityActions = (entity) => {
  return {
    async save({ state }) {
      setLocalStorage(entity, state[entity])
    },
    async delete({ commit }) {
      localStorage.removeItem(entity)
      commit('CLEAR_STATE')
    },
    async fetch({ commit }) {
      commit('SET', getLocalStorage(entity))
    },
    async useDefaults({ state, commit }) {
      commit('SET', createDefaultsForEntity(entity))
      setLocalStorage(entity, state[entity])
    },
  }
}

function createDefaultsForEntity(entity) {
  switch (entity) {
    case ENTITY.exercises:
      return createDefaultExercises()
    case ENTITY.workouts:
      return createDefaultWorkouts()
    default:
      return null
  }
}

export const recordActions = (entity) => {
  return {
    async add({ state, commit }, newRecords) {
      const combinedRecords = [...state[entity], ...newRecords]
      commit('SET', combinedRecords)
      setLocalStorage(entity, state[entity])
    },
  }
}

export const activeRecordActions = (entity) => {
  return {
    async create({ state, commit }, ids) {
      const newRecords = createEntityRecords(entity, ids)
      commit('SET', newRecords)
      setLocalStorage(entity, state[entity])
    },
  }
}

function createEntityRecords(entity, ids) {
  if (!Array.isArray(ids)) ids = [ids] // Must be an array, even if only 1 element

  switch (entity) {
    case ENTITY.activeExerciseRecords:
    case ENTITY.exerciseRecords:
      return ids.map((id) => new ExerciseRecord({ exerciseId: id }))
    case ENTITY.activeWorkoutRecords:
    case ENTITY.workoutRecords:
      return ids.map((id) => new WorkoutRecord({ workoutId: id }))
    default:
      return null
  }
}
