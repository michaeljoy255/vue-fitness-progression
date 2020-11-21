import _RecordContainer from './_RecordContainer.js'
import ExerciseRecord from './ExerciseRecord.js'
import {
  ContainerItemsMismatchError,
  ContainersMismatchError,
} from './Errors.js'

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
      console.error('Error:', container._items)
    }
  }

  fromArray(records) {
    if (ExerciseRecord.isArrayOfExerciseRecords(records)) {
      this._items = records
      return this
    } else {
      console.error(new ContainerItemsMismatchError())
    }
  }

  fromContainer(records) {
    if (ExerciseRecordContainer.isExerciseRecordContainer(records)) {
      this._items = records.toArray()
      return this
    } else {
      console.error(new ContainersMismatchError())
    }
  }

  add(record) {
    if (ExerciseRecord.isExerciseRecord(record)) {
      this._items.push(record)
      return this
    } else {
      console.error(new ContainerItemsMismatchError())
    }
  }

  update(record) {
    if (ExerciseRecord.isExerciseRecord(record)) {
      console.log('ExerciseRecordContainer update() called - NOT IMPLEMENTED')
    } else {
      console.error(new ContainerItemsMismatchError())
    }
  }

  remove(record) {
    if (ExerciseRecord.isExerciseRecord(record)) {
      console.log('ExerciseRecordContainer remove() called - NOT IMPLEMENTED')
    } else {
      console.error(new ContainerItemsMismatchError())
    }
  }
}
