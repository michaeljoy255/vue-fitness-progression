import _DescriptorsContainer from './_DescriptorsContainer.js'
import Exercise from './Exercise.js'
import { ContainerMismatchError } from './Errors.js'

/**
 *
 */
export default class ExerciseContainer extends _DescriptorsContainer {
  constructor({ items = [] } = {}) {
    super({ items })
  }

  static isExerciseContainer(exerciseContainer) {
    return exerciseContainer instanceof ExerciseContainer
  }

  fromArray(exercisesArray) {
    if (
      Array.isArray(exercisesArray) &&
      exercisesArray.every((element) => Exercise.isExercise(element))
    ) {
      this._items = exercisesArray
    } else {
      new ContainerMismatchError()
    }
  }

  toArray() {
    return this._items
  }

  findByName(name) {
    return this._items.filter((item) => item.name === name)
  }

  findByEquipment(equipment) {
    return this._items.filter((item) => item.equipment === equipment)
  }
}
