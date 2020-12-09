import _Descriptors from './_Descriptors.js'

export default class Workout extends _Descriptors {
  constructor({ id, name, description, previousRecord, exercises = [] } = {}) {
    super({ id, name, description, previousRecord })
    this.exercises = exercises
  }

  static isWorkout(workout) {
    return workout instanceof Workout
  }

  static isArrayOfWorkouts(workouts) {
    return (
      Array.isArray(workouts) && workouts.every((i) => Workout.isWorkout(i))
    )
  }

  getPreviousRecordCreatedAt() {
    if (this.previousRecord && this.previousRecord.createdAt) {
      return new Date(this.previousRecord.createdAt).toDateString()
    } else {
      return 'No previous record found'
    }
  }
}
