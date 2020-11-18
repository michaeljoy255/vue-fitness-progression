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

  getArray() {
    return this._items
  }

  set(data) {
    if (ExerciseContainer.isExerciseContainer(data)) {
      this._items = data.getArray()
    } else if (this._isValidExerciseArray(data)) {
      this._items = data
    } else {
      throw new ExerciseContainerMismatchError()
    }
  }

  _isValidExerciseArray(items) {
    return (
      Array.isArray(items) &&
      items.every((element) => Exercise.isExercise(element))
    )
  }

  findByName(name) {
    return this._items.filter((item) => item.name === name)
  }

  findByEquipment(equipment) {
    return this._items.filter((item) => item.equipment === equipment)
  }
}
