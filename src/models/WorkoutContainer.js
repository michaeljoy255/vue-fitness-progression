import _DescriptorsContainer from './_DescriptorsContainer.js'
import Workout from './Workout.js'
import { getDefaultWorkouts } from '../utils/defaults.js'
import { InstanceError, StorageError } from '../utils/errors.js'
import { getLocalStorage, setLocalStorage } from '../utils/storage.js'

export default class WorkoutContainer extends _DescriptorsContainer {
  static isWorkoutContainer(container) {
    return container instanceof WorkoutContainer
  }

  static exportData(container) {
    if (WorkoutContainer.isWorkoutContainer(container)) {
      return container._items.map((i) => Workout.exportData(i))
    } else {
      console.error(new InstanceError('WorkoutContainer'))
    }
  }

  static importData(workouts) {
    if (!workouts) return null

    return new WorkoutContainer().fromArray(
      workouts.map((i) => Workout.importData(i))
    )
  }

  static fetchWorkouts() {
    return new Promise((resolve, reject) => {
      try {
        const data = getLocalStorage('workouts')
        const workouts = WorkoutContainer.importData(data)
        return resolve(workouts)
      } catch (error) {
        return reject(new StorageError(error))
      }
    })
  }

  static fetchDefaultWorkouts() {
    return new Promise((resolve, reject) => {
      try {
        return resolve(getDefaultWorkouts())
      } catch (error) {
        return reject(new StorageError(error))
      }
    })
  }

  static saveWorkouts(workouts) {
    return new Promise((resolve, reject) => {
      try {
        const exportedWorkouts = WorkoutContainer.exportData(workouts)
        setLocalStorage('workouts', exportedWorkouts)
        resolve('Workouts saved.')
      } catch (error) {
        reject(new StorageError(error))
      }
    })
  }

  static deleteWorkouts() {
    localStorage.removeItem('workouts')
  }

  fromArray(workouts) {
    if (Workout.isArrayOfWorkouts(workouts)) {
      this._items = workouts
      return this
    } else {
      console.error(new InstanceError('Workout'))
    }
  }

  fromContainer(workouts) {
    if (WorkoutContainer.isExerciseContainer(workouts)) {
      this._items = workouts.toArray()
      return this
    } else {
      console.error(new InstanceError('WorkoutContainer'))
    }
  }

  add(workout) {
    if (Workout.isWorkout(workout)) {
      this._items.push(workout)
      return this
    } else {
      console.error(new InstanceError('Workout'))
    }
  }
}
