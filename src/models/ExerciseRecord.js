import _Record from './_Record.js'

export default class ExerciseRecord extends _Record {
  constructor({
    id = null,
    createdAt = null,
    note = null,
    sets = [],
    exerciseId = null,
  } = {}) {
    super({ id, createdAt, note })
    this.sets = sets
    this.exerciseId = exerciseId
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
}
