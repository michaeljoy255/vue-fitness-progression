import _DescriptorsContainer from './_DescriptorsContainer.js'
import Exercise from './Exercise.js'
import { ExerciseContainerMismatchError } from './Errors.js'

/**
 *
 */
export default class ExerciseContainer extends _DescriptorsContainer {
  static isExerciseContainer(container) {
    return container instanceof ExerciseContainer
  }

  get items() {
    return this._items
  }

  set items(exercises) {
    if (
      Array.isArray(exercises) &&
      exercises.every((element) => Exercise.isExercise(element))
    ) {
      this._items = exercises
    } else {
      throw new ExerciseContainerMismatchError(exercises)
    }
  }

  findByName(name) {
    return this._items.filter((item) => item.name === name)
  }

  findByEquipment(equipment) {
    return this._items.filter((item) => item.equipment === equipment)
  }
}
