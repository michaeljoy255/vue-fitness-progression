import _RecordContainer from './_RecordContainer.js'
import WorkoutRecord from './WorkoutRecord.js'
import {
  ContainerItemsMismatchError,
  ContainersMismatchError,
} from './Errors.js'

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
      console.error('Error:', container._items)
    }
  }

  static importData(records) {
    return new WorkoutRecordContainer().fromArray(
      records.map((i) => WorkoutRecord.importData(i))
    )
  }

  fromArray(records) {
    if (WorkoutRecord.isArrayOfWorkoutRecords(records)) {
      this._items = records
      return this
    } else {
      console.error(new ContainerItemsMismatchError())
    }
  }

  fromContainer(records) {
    if (WorkoutRecordContainer.isWorkoutRecordContainer(records)) {
      this._items = records.toArray()
      return this
    } else {
      console.error(new ContainersMismatchError())
    }
  }

  add(record) {
    if (WorkoutRecord.isWorkoutRecord(record)) {
      this._items.push(record)
      return this
    } else {
      console.error(new ContainerItemsMismatchError())
    }
  }

  update(record) {
    if (WorkoutRecord.isWorkoutRecord(record)) {
      console.log('WorkoutRecordContainer update() called - NOT IMPLEMENTED')
    } else {
      console.error(new ContainerItemsMismatchError())
    }
  }

  remove(record) {
    if (WorkoutRecord.isWorkoutRecord(record)) {
      console.log('WorkoutRecordContainer remove() called - NOT IMPLEMENTED')
    } else {
      console.error(new ContainerItemsMismatchError())
    }
  }
}
