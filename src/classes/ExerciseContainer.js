import _DescriptorsContainer from './_DescriptorsContainer.js'
import Exercise from './Exercise.js'

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
    if (this._isArrayWithExercises(exercisesArray)) {
      this._items = exercisesArray
    } else {
      // Need custom errors?!
      throw 'Argument must be Array with Exercise elements only.'
    }
  }

  toArray() {
    return this._items
  }

  _isArrayWithExercises(exercisesArray) {
    return (
      Array.isArray(exercisesArray) &&
      exercisesArray.every((val) => Exercise.isExercise(val))
    )
  }

  findByName(name) {
    return this._items.filter((item) => item.name === name)
  }

  findByEquipment(equipment) {
    return this._items.filter((item) => item.equipment === equipment)
  }
}
