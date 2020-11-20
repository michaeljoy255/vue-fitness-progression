import _Descriptors from './_Descriptors.js'
import ExerciseContainer from './ExerciseContainer.js'

/**
 *
 */
export default class Workout extends _Descriptors {
  constructor({
    id = null,
    name = null,
    description = null,
    previousRecord = null,
    exercises = null,
  } = {}) {
    super({ id, name, description, previousRecord })

    if (Array.isArray(exercises)) {
      this._exercises = new ExerciseContainer().fromArray(exercises)
    } else {
      this._exercises = new ExerciseContainer().fromContainer(exercises)
    }
  }

  static isWorkout(workout) {
    return workout instanceof Workout
  }

  static isArrayOfWorkouts(workouts) {
    return (
      Array.isArray(workouts) && workouts.every((i) => Workout.isWorkout(i))
    )
  }

  get exercises() {
    return this._exercises
  }

  set exercises(exercises) {
    if (Array.isArray(exercises)) {
      this._exercises.fromArray(exercises)
    } else {
      this._exercises.fromContainer(exercises)
    }
  }
}
