import _DescriptorsContainer from './_DescriptorsContainer.js'
import Workout from './Workout.js'
import {
  ContainerItemsMismatchError,
  ContainersMismatchError,
} from './Errors.js'

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
      console.error('Error:', container._items)
    }
  }

  fromArray(workouts) {
    if (Workout.isArrayOfWorkouts(workouts)) {
      this._items = workouts
      return this
    } else {
      console.error(new ContainerItemsMismatchError())
    }
  }

  fromContainer(workouts) {
    if (WorkoutContainer.isExerciseContainer(workouts)) {
      this._items = workouts.toArray()
      return this
    } else {
      console.error(new ContainersMismatchError())
    }
  }

  add(workout) {
    if (Workout.isWorkout(workout)) {
      this._items.push(workout)
      return this
    } else {
      console.error(new ContainerItemsMismatchError())
    }
  }

  update(workout) {
    if (Workout.isWorkout(workout)) {
      console.log('WorkoutContainer update() called - NOT IMPLEMENTED')
    } else {
      console.error(new ContainerItemsMismatchError())
    }
  }

  remove(workout) {
    if (Workout.isWorkout(workout)) {
      console.log('WorkoutContainer remove() called - NOT IMPLEMENTED')
    } else {
      console.error(new ContainerItemsMismatchError())
    }
  }
}
