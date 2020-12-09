import _Descriptors from './_Descriptors.js'
import WorkoutRecord from './WorkoutRecord.js'
import ExerciseContainer from './ExerciseContainer.js'
import Exercise from './Exercise.js'
import { InstanceError } from '../utils/errors.js'

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

  static exportData(workout) {
    if (Workout.isWorkout(workout)) {
      return {
        id: workout._id,
        name: workout._name,
        description: workout._description,
        previousRecord: workout._previousRecord
          ? WorkoutRecord.exportData(workout._previousRecord)
          : null,
        exercises: ExerciseContainer.exportData(workout._exercises),
      }
    } else {
      console.error(new InstanceError('Workout'))
    }
  }

  static importData(workout) {
    if (!workout) return null

    return new Workout({
      id: workout.id,
      name: workout.name,
      description: workout.description,
      previousRecord: WorkoutRecord.importData(workout.previousRecord),
      exercises: new ExerciseContainer().fromArray(
        workout.exercises.map((i) => Exercise.importData(i))
      ),
    })
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

  getPreviousRecordCreatedAt() {
    if (this._previousRecord && this._previousRecord.createdAt) {
      return new Date(this._previousRecord.createdAt).toDateString()
    } else {
      return 'No previous record found'
    }
  }
}
