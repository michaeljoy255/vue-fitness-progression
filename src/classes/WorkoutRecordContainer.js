import _RecordContainer from './_RecordContainer.js'
import WorkoutRecord from './WorkoutRecord.js'
import { WorkoutRecordContainerMismatchError } from './Errors.js'

/**
 *
 */
export default class WorkoutRecordContainer extends _RecordContainer {
  static isWorkoutRecordContainer(container) {
    return container instanceof WorkoutRecordContainer
  }

  fromArray(records) {
    if (
      Array.isArray(records) &&
      records.every((i) => WorkoutRecord.isWorkoutRecord(i))
    ) {
      this._items = records
      return this
    } else {
      throw new WorkoutRecordContainerMismatchError()
    }
  }

  fromContainer(records) {
    if (WorkoutRecordContainer.isWorkoutRecordContainer(records)) {
      this._items = records.toArray()
      return this
    } else {
      throw new WorkoutRecordContainerMismatchError()
    }
  }

  add(record) {
    if (WorkoutRecord.isWorkoutRecord(record)) {
      this._items.push(record)
      return this
    } else {
      throw new WorkoutRecordContainerMismatchError()
    }
  }

  update(record) {
    if (WorkoutRecord.isWorkoutRecord(record)) {
      console.log('WorkoutRecordContainer update() called - NOT IMPLEMENTED')
    } else {
      throw new WorkoutRecordContainerMismatchError()
    }
  }

  remove(record) {
    if (WorkoutRecord.isWorkoutRecord(record)) {
      console.log('WorkoutRecordContainer remove() called - NOT IMPLEMENTED')
    } else {
      throw new WorkoutRecordContainerMismatchError()
    }
  }
}
