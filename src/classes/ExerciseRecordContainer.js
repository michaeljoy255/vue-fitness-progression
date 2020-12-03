import _RecordContainer from './_RecordContainer.js'
import ExerciseRecord from './ExerciseRecord.js'
import { InstanceError } from './Errors.js'

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
