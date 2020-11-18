import _RecordContainer from './_RecordContainer.js'
import ExerciseRecord from './ExerciseRecord.js'
import { ExerciseRecordContainerMismatchError } from './Errors.js'

/**
 *
 */
export default class ExerciseRecordContainer extends _RecordContainer {
  constructor({ items = [] } = {}) {
    super({ items })
  }

  static isExerciseRecordContainer(container) {
    return container instanceof ExerciseRecordContainer
  }

  set items(records) {
    if (
      Array.isArray(records) &&
      records.every((element) => ExerciseRecord.isExerciseRecord(element))
    ) {
      this._items = records
    } else {
      throw new ExerciseRecordContainerMismatchError(records)
    }
  }
}
