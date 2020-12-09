import _DescriptorsContainer from './_DescriptorsContainer.js'
import Exercise from './Exercise.js'
import { getDefaultExercises } from '../utils/defaults.js'
import { InstanceError, StorageError } from '../utils/errors.js'
import { getLocalStorage, setLocalStorage } from '../utils/storage.js'

export default class ExerciseContainer extends _DescriptorsContainer {
  static isExerciseContainer(container) {
    return container instanceof ExerciseContainer
  }

  static exportData(container) {
    if (ExerciseContainer.isExerciseContainer(container)) {
      return container._items.map((i) => Exercise.exportData(i))
    } else {
      console.error(new InstanceError('ExerciseContainer'))
    }
  }

  static importData(exercises) {
    if (!exercises) return null

    return new ExerciseContainer().fromArray(
      exercises.map((i) => Exercise.importData(i))
    )
  }

  static fetchExercises() {
    return new Promise((resolve, reject) => {
      try {
        const data = getLocalStorage('exercises')
        const exercises = ExerciseContainer.importData(data)
        return resolve(exercises)
      } catch (error) {
        return reject(new StorageError(error))
      }
    })
  }

  static fetchDefaultExercises() {
    return new Promise((resolve, reject) => {
      try {
        return resolve(getDefaultExercises())
      } catch (error) {
        return reject(new StorageError(error))
      }
    })
  }

  static saveExercises(exercises) {
    return new Promise((resolve, reject) => {
      try {
        const exportedExercises = ExerciseContainer.exportData(exercises)
        setLocalStorage('exercises', exportedExercises)
        resolve('Exercises saved.')
      } catch (error) {
        reject(new StorageError(error))
      }
    })
  }

  static deleteExercises() {
    localStorage.removeItem('exercises')
  }

  fromArray(exercises) {
    if (Exercise.isArrayOfExercises(exercises)) {
      this._items = exercises
      return this
    } else {
      console.error(new InstanceError('Exercise'))
    }
  }

  fromContainer(exercises) {
    if (ExerciseContainer.isExerciseContainer(exercises)) {
      this._items = exercises.toArray()
      return this
    } else {
      console.error(new InstanceError('ExerciseContainer'))
    }
  }

  add(exercise) {
    if (Exercise.isExercise(exercise)) {
      this._items.push(exercise)
      return this
    } else {
      console.error(new InstanceError('Exercise'))
    }
  }

  findByCategory(category) {
    return this._items.filter((item) => item.category === category)
  }

  findByEquipment(equipment) {
    return this._items.filter((item) => item.equipment === equipment)
  }
}
