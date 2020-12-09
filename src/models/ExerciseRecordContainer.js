import _RecordContainer from './_RecordContainer.js'
import ExerciseRecord from './ExerciseRecord.js'
import { InstanceError, StorageError } from '../utils/errors.js'
import { getLocalStorage, setLocalStorage } from '../utils/storage.js'

/**
 *
 */
export default class ExerciseRecordContainer extends _RecordContainer {
  static isExerciseRecordContainer(container) {
    return container instanceof ExerciseRecordContainer
  }

  static exportData(container) {
    if (ExerciseRecordContainer.isExerciseRecordContainer(container)) {
      return container._items.map((i) => ExerciseRecord.exportData(i))
    } else {
      console.error(new InstanceError('ExerciseRecordContainer'))
    }
  }

  static importData(records) {
    if (!records) return null

    return new ExerciseRecordContainer().fromArray(
      records.map((i) => ExerciseRecord.importData(i))
    )
  }

  static fetchActiveExercises() {
    return new Promise((resolve, reject) => {
      try {
        const data = getLocalStorage('activeExercises')
        const activeExercises = ExerciseRecordContainer.importData(data)
        return resolve(activeExercises)
      } catch (error) {
        return reject(new StorageError(error))
      }
    })
  }

  static saveActiveExercises(activeExercises) {
    return new Promise((resolve, reject) => {
      try {
        const exportedActiveExercises = ExerciseRecordContainer.exportData(
          activeExercises
        )
        setLocalStorage('activeExercises', exportedActiveExercises)
        resolve('Active Exercises saved.')
      } catch (error) {
        reject(new StorageError(error))
      }
    })
  }

  static deleteActiveExercises() {
    localStorage.removeItem('activeExercises')
  }

  fromArray(records) {
    if (ExerciseRecord.isArrayOfExerciseRecords(records)) {
      this._items = records
      return this
    } else {
      console.error(new InstanceError('ExerciseRecord'))
    }
  }

  fromContainer(records) {
    if (ExerciseRecordContainer.isExerciseRecordContainer(records)) {
      this._items = records.toArray()
      return this
    } else {
      console.error(new InstanceError('ExerciseRecordContainer'))
    }
  }

  add(record) {
    if (ExerciseRecord.isExerciseRecord(record)) {
      this._items.push(record)
      return this
    } else {
      console.error(new InstanceError('ExerciseRecord'))
    }
  }
}
