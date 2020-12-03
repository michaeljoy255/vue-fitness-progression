import _DescriptorsContainer from './_DescriptorsContainer.js'
import Workout from './Workout.js'
import { InstanceError } from './Errors.js'

/**
 *
 */
export default class WorkoutContainer extends _DescriptorsContainer {
  static isWorkoutContainer(container) {
    return container instanceof WorkoutContainer
  }

  static exportData(container) {
    if (WorkoutContainer.isWorkoutContainer(container)) {
      return container._items.map((i) => Workout.exportData(i))
    } else {
      console.error(new InstanceError('WorkoutContainer'))
    }
  }

  static importData(workouts) {
    if (!workouts) return null

    return new WorkoutContainer().fromArray(
      workouts.map((i) => Workout.importData(i))
    )
  }

  fromArray(workouts) {
    if (Workout.isArrayOfWorkouts(workouts)) {
      this._items = workouts
      return this
    } else {
      console.error(new InstanceError('Workout'))
    }
  }

  fromContainer(workouts) {
    if (WorkoutContainer.isExerciseContainer(workouts)) {
      this._items = workouts.toArray()
      return this
    } else {
      console.error(new InstanceError('WorkoutContainer'))
    }
  }

  add(workout) {
    if (Workout.isWorkout(workout)) {
      this._items.push(workout)
      return this
    } else {
      console.error(new InstanceError('Workout'))
    }
  }
}
