import _DescriptorsContainer from './_DescriptorsContainer.js'
import Workout from './Workout.js'
import { WorkoutContainerMismatchError } from './Errors.js'

/**
 *
 */
export default class WorkoutContainer extends _DescriptorsContainer {
  constructor({ items = [] } = {}) {
    super({ items })
  }

  static isWorkoutContainer(container) {
    return container instanceof WorkoutContainer
  }

  set items(workouts) {
    if (
      Array.isArray(workouts) &&
      workouts.every((element) => Workout.isWorkout(element))
    ) {
      this._items = workouts
    } else {
      new WorkoutContainerMismatchError(workouts)
    }
  }
}
