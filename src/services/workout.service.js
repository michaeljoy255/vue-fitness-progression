import WorkoutContainer from '../classes/WorkoutContainer.js'
import WorkoutRecord from '../classes/WorkoutRecord.js'
import { StorageError } from '../classes/Errors.js'

export function getWorkouts() {
  return new Promise((resolve, reject) => {
    try {
      const parsedWorkouts = JSON.parse(localStorage.getItem('workouts'))
      const workouts = WorkoutContainer.importData(parsedWorkouts)
      return resolve(workouts)
    } catch (error) {
      return reject(new StorageError(error))
    }
  })
}

export function saveWorkouts(workouts) {
  return new Promise((resolve, reject) => {
    try {
      const exportedWorkouts = WorkoutContainer.exportData(workouts)
      const jsonWorkouts = JSON.stringify(exportedWorkouts)
      localStorage.setItem('workouts', jsonWorkouts)
      resolve()
    } catch (error) {
      reject(new StorageError(error))
    }
  })
}

export function deleteWorkouts() {
  return new Promise((resolve, reject) => {
    try {
      localStorage.removeItem('workouts')
      resolve()
    } catch (error) {
      reject(new StorageError(error))
    }
  })
}

export function getActiveWorkout() {
  return new Promise((resolve, reject) => {
    try {
      const parsedActiveWorkout = JSON.parse(
        localStorage.getItem('activeWorkout')
      )
      const activeWorkout = WorkoutRecord.importData(parsedActiveWorkout)
      return resolve(activeWorkout)
    } catch (error) {
      return reject(new StorageError(error))
    }
  })
}

export function saveActiveWorkout(activeWorkout) {
  return new Promise((resolve, reject) => {
    try {
      const exportedActiveWorkout = WorkoutRecord.exportData(activeWorkout)
      const jsonActiveWorkout = JSON.stringify(exportedActiveWorkout)
      localStorage.setItem('activeWorkout', jsonActiveWorkout)
      resolve()
    } catch (error) {
      reject(new StorageError(error))
    }
  })
}

export function deleteActiveWorkout() {
  return new Promise((resolve, reject) => {
    try {
      localStorage.removeItem('activeWorkout')
      resolve()
    } catch (error) {
      reject(new StorageError(error))
    }
  })
}
