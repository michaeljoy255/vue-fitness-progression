import _Record from './_Record.js'

export default class WorkoutRecord extends _Record {
  constructor({ id, createdAt, note, duration = 0, workoutId = null } = {}) {
    super({ id, createdAt, note })
    this.duration = duration
    this.workoutId = workoutId
  }

  static isWorkoutRecord(record) {
    return record instanceof WorkoutRecord
  }

  static isWorkoutRecordArray(records) {
    return (
      Array.isArray(records) &&
      records.every((i) => WorkoutRecord.isWorkoutRecord(i))
    )
  }

  static isWorkoutRecordArrayWithData(items) {
    return WorkoutRecord.isWorkoutRecordArray(items) && items.length > 0
  }

  static findByWorkoutId(items, id) {
    return items.find((i) => i.workoutId === id)
  }
}
