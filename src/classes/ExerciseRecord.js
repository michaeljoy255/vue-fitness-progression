import _Record from './_Record.js'
import ExerciseSet from './ExerciseSet.js'

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

  static exportData(record) {
    if (ExerciseRecord.isExerciseRecord(record)) {
      return {
        id: record._id,
        createdAt: record._createdAt,
        note: record._note,
        sets: record._sets.map((i) => ExerciseSet.exportData(i)),
        exerciseId: record._exerciseId,
      }
    } else {
      console.error('Error:', record)
    }
  }

  static importData(record) {
    return new ExerciseRecord({
      id: record.id,
      createdAt: record.createdAt,
      note: record.note,
      sets: record.sets.map((i) => ExerciseSet.importData(i)),
      exerciseId: record.exerciseId,
    })
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
