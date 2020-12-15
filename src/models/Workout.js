import _Descriptors from './_Descriptors.js'

export default class Workout extends _Descriptors {
  constructor({
    id,
    name,
    description,
    previousRecordId,
    exerciseIds = [],
  } = {}) {
    super({ id, name, description, previousRecordId })
    this.exerciseIds = exerciseIds
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
}
