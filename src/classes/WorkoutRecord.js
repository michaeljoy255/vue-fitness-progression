import _Record from './_Record.js'

/**
 *
 */
export default class WorkoutRecord extends _Record {
  constructor({
    id = null,
    createdAt = null,
    note = null,
    duration = null,
    workoutId = null,
  } = {}) {
    super({ id, createdAt, note })
    this._duration = duration
    this._workoutId = workoutId
  }

  static isWorkoutRecord(record) {
    return record instanceof WorkoutRecord
  }

  static isArrayOfWorkoutRecords(records) {
    return (
      Array.isArray(records) &&
      records.every((i) => WorkoutRecord.isWorkoutRecord(i))
    )
  }

  static exportData(record) {
    if (WorkoutRecord.isWorkoutRecord(record)) {
      return {
        id: record._id,
        createdAt: record._createdAt,
        note: record._note,
        duration: record._duration,
        workoutId: record._workoutId,
      }
    } else {
      console.error('Error:', record)
    }
  }

  get duration() {
    return this._duration
  }

  get workoutId() {
    return this._workoutId
  }

  set duration(duration) {
    this._duration = duration
  }

  set workoutId(workoutId) {
    this._workoutId = workoutId
  }

  exportData() {
    return {
      id: this._id,
      createdAt: this._createdAt,
      note: this._note,
      duration: this._duration,
      workoutId: this._workoutId,
    }
  }
}
