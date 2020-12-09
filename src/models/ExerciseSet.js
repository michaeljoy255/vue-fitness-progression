export default class ExerciseSet {
  constructor({
    weight = null,
    reps = null,
    duration = null,
    distance = null,
  } = {}) {
    this.weight = weight
    this.reps = reps
    this.duration = duration
    this.distance = distance
  }

  static isExerciseSet(set) {
    return set instanceof ExerciseSet
  }
}
