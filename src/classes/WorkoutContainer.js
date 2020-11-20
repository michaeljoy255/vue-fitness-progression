import _DescriptorsContainer from './_DescriptorsContainer.js'
import Workout from './Workout.js'
import { WorkoutContainerMismatchError } from './Errors.js'

/**
 *
 */
export default class WorkoutContainer extends _DescriptorsContainer {
  static isWorkoutContainer(container) {
    return container instanceof WorkoutContainer
  }

  fromArray(workouts) {
    if (
      Array.isArray(workouts) &&
      workouts.every((i) => Workout.isWorkout(i))
    ) {
      this._items = workouts
      return this
    } else {
      throw new WorkoutContainerMismatchError()
    }
  }

  fromContainer(workouts) {
    if (WorkoutContainer.isExerciseContainer(workouts)) {
      this._items = workouts.toArray()
      return this
    } else {
      throw new WorkoutContainerMismatchError()
    }
  }

  add(workout) {
    if (Workout.isWorkout(workout)) {
      this._items.push(workout)
      return this
    } else {
      throw new WorkoutContainerMismatchError()
    }
  }

  update(workout) {
    if (Workout.isWorkout(workout)) {
      console.log('WorkoutContainer update() called - NOT IMPLEMENTED')
    } else {
      throw new WorkoutContainerMismatchError()
    }
  }

  remove(workout) {
    if (Workout.isWorkout(workout)) {
      console.log('WorkoutContainer remove() called - NOT IMPLEMENTED')
    } else {
      throw new WorkoutContainerMismatchError()
    }
  }
}
