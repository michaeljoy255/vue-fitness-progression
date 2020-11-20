import _RecordContainer from './_RecordContainer.js'
import ExerciseRecord from './ExerciseRecord.js'
import { ExerciseRecordContainerMismatchError } from './Errors.js'

/**
 *
 */
export default class ExerciseRecordContainer extends _RecordContainer {
  static isExerciseRecordContainer(container) {
    return container instanceof ExerciseRecordContainer
  }

  fromArray(records) {
    if (
      Array.isArray(records) &&
      records.every((i) => ExerciseRecord.isExerciseRecord(i))
    ) {
      this._items = records
      return this
    } else {
      throw new ExerciseRecordContainerMismatchError()
    }
  }

  fromContainer(records) {
    if (ExerciseRecordContainer.isExerciseRecordContainer(records)) {
      this._items = records.toArray()
      return this
    } else {
      throw new ExerciseRecordContainerMismatchError()
    }
  }

  add(record) {
    if (ExerciseRecord.isExerciseRecord(record)) {
      this._items.push(record)
      return this
    } else {
      throw new ExerciseRecordContainerMismatchError()
    }
  }

  update(record) {
    if (ExerciseRecord.isExerciseRecord(record)) {
      console.log('ExerciseRecordContainer update() called - NOT IMPLEMENTED')
    } else {
      throw new ExerciseRecordContainerMismatchError()
    }
  }

  remove(record) {
    if (ExerciseRecord.isExerciseRecord(record)) {
      console.log('ExerciseRecordContainer remove() called - NOT IMPLEMENTED')
    } else {
      throw new ExerciseRecordContainerMismatchError()
    }
  }
}
