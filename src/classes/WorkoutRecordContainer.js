import _RecordContainer from './_RecordContainer.js'
import WorkoutRecord from './WorkoutRecord.js'
import { InstanceError } from './Errors.js'

/**
 *
 */
export default class WorkoutRecordContainer extends _RecordContainer {
  static isWorkoutRecordContainer(container) {
    return container instanceof WorkoutRecordContainer
  }

  static exportData(container) {
    if (WorkoutRecordContainer.isWorkoutRecordContainer(container)) {
      return container._items.map((i) => WorkoutRecord.exportData(i))
    } else {
      console.error(new InstanceError('WorkoutRecordContainer'))
    }
  }

  static importData(records) {
    if (!records) return null

    return new WorkoutRecordContainer().fromArray(
      records.map((i) => WorkoutRecord.importData(i))
    )
  }

  fromArray(records) {
    if (WorkoutRecord.isArrayOfWorkoutRecords(records)) {
      this._items = records
      return this
    } else {
      console.error(new InstanceError('WorkoutRecord'))
    }
  }

  fromContainer(records) {
    if (WorkoutRecordContainer.isWorkoutRecordContainer(records)) {
      this._items = records.toArray()
      return this
    } else {
      console.error(new InstanceError('WorkoutRecordContainer'))
    }
  }

  add(record) {
    if (WorkoutRecord.isWorkoutRecord(record)) {
      this._items.push(record)
      return this
    } else {
      console.error(new InstanceError('WorkoutRecord'))
    }
  }
}
