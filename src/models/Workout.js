import _Descriptors from './_Descriptors.js'

export default class Workout extends _Descriptors {
  constructor({ id, name, description, previousRecord, exercises = [] } = {}) {
    super({ id, name, description, previousRecord })
    this.exercises = exercises
  }

  static isWorkout(workout) {
    return workout instanceof Workout
  }

  static isWorkoutArray(items) {
    return Array.isArray(items) && items.every((i) => Workout.isWorkout(i))
  }

  static isWorkoutArrayWithData(items) {
    return Workout.isWorkoutArray(items) && items.length > 0
  }

  getPreviousRecordCreatedAt() {
    if (this.previousRecord && this.previousRecord.createdAt) {
      return new Date(this.previousRecord.createdAt).toDateString()
    } else {
      return 'No previous record found'
    }
  }
}
