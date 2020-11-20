import _Record from './_Record.js'
// import ExerciseSets

/**
 *
 */
export default class ExerciseRecord extends _Record {
  constructor({
    id = null,
    createdAt = null,
    note = null,
    sets = [],
    exerciseId = null,
  } = {}) {
    super({ id, createdAt, note })
    this._sets = sets
    this._exerciseId = exerciseId
  }

  static isExerciseRecord(record) {
    return record instanceof ExerciseRecord
  }

  static isArrayOfExerciseRecords(records) {
    return (
      Array.isArray(records) &&
      records.every((i) => ExerciseRecord.isExerciseRecord(i))
    )
  }

  get sets() {
    return this._sets
  }

  get exerciseId() {
    return this._exerciseId
  }

  set sets(sets) {
    this._sets = sets
  }

  set exerciseId(exerciseId) {
    this._exerciseId = exerciseId
  }
}
