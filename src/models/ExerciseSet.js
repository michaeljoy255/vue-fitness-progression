export default class ExerciseSet {
  constructor({ weight = 0, reps = 0, duration = 0, distance = 0 } = {}) {
    this.weight = weight
    this.reps = reps
    this.duration = duration
    this.distance = distance
  }

  static isExerciseSet(set) {
    return set instanceof ExerciseSet
  }

  static isExerciseSetArray(items) {
    return (
      Array.isArray(items) && items.every((i) => ExerciseSet.isExerciseSet(i))
    )
  }

  static isExerciseSetArrayWithData(items) {
    return ExerciseSet.isExerciseSetArray(items) && items.length > 0
  }
}
