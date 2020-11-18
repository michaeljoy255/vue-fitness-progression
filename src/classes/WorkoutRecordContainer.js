import _RecordContainer from './_RecordContainer.js'
import WorkoutRecord from './WorkoutRecord.js'
import { WorkoutRecordContainerMismatchError } from './Errors.js'

/**
 *
 */
export default class WorkoutRecordContainer extends _RecordContainer {
  constructor({ items = [] } = {}) {
    super({ items })
  }

  static isWorkoutRecordContainer(container) {
    return container instanceof WorkoutRecordContainer
  }

  set items(records) {
    if (
      Array.isArray(records) &&
      records.every((element) => WorkoutRecord.isWorkoutRecord(element))
    ) {
      this._items = records
    } else {
      new WorkoutRecordContainerMismatchError(records)
    }
  }
}
