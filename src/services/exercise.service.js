import ExerciseContainer from '../classes/ExerciseContainer.js'
import ExerciseRecordContainer from '../classes/ExerciseRecordContainer.js'
import { StorageError } from '../classes/Errors.js'

export function getExercises() {
  return new Promise((resolve, reject) => {
    try {
      const parsedExercises = JSON.parse(localStorage.getItem('exercises'))
      const exercises = ExerciseContainer.importData(parsedExercises)
      return resolve(exercises)
    } catch (error) {
      return reject(new StorageError(error))
    }
  })
}

export function saveExercises(exercises) {
  return new Promise((resolve, reject) => {
    try {
      const exportedExercises = ExerciseContainer.exportData(exercises)
      const jsonExercises = JSON.stringify(exportedExercises)
      localStorage.setItem('exercises', jsonExercises)
      resolve()
    } catch (error) {
      reject(new StorageError(error))
    }
  })
}

export function deleteExercises() {
  return new Promise((resolve, reject) => {
    try {
      localStorage.removeItem('exercises')
      resolve()
    } catch (error) {
      reject(new StorageError(error))
    }
  })
}

export function getActiveExercises() {
  return new Promise((resolve, reject) => {
    try {
      const parsedActiveExercises = JSON.parse(
        localStorage.getItem('activeExercises')
      )
      const activeExercises = ExerciseRecordContainer.importData(
        parsedActiveExercises
      )
      return resolve(activeExercises)
    } catch (error) {
      return reject(new StorageError(error))
    }
  })
}

export function saveActiveExercises(activeExercises) {
  return new Promise((resolve, reject) => {
    try {
      const exportedActiveExercises = ExerciseRecordContainer.exportData(
        activeExercises
      )
      const jsonActiveExercises = JSON.stringify(exportedActiveExercises)
      localStorage.setItem('activeExercises', jsonActiveExercises)
      resolve()
    } catch (error) {
      reject(new StorageError(error))
    }
  })
}

export function deleteActiveExercises() {
  return new Promise((resolve, reject) => {
    try {
      localStorage.removeItem('activeExercises')
      resolve()
    } catch (error) {
      reject(new StorageError(error))
    }
  })
}
