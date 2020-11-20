import _DescriptorsContainer from './_DescriptorsContainer.js'
import Exercise from './Exercise.js'
import {
  ContainerItemsMismatchError,
  ContainersMismatchError,
} from './Errors.js'

/**
 *
 */
export default class ExerciseContainer extends _DescriptorsContainer {
  static isExerciseContainer(container) {
    return container instanceof ExerciseContainer
  }

  fromArray(exercises) {
    if (Exercise.isArrayOfExercises(exercises)) {
      this._items = exercises
      return this
    } else {
      console.error(new ContainerItemsMismatchError())
    }
  }

  fromContainer(exercises) {
    if (ExerciseContainer.isExerciseContainer(exercises)) {
      this._items = exercises.toArray()
      return this
    } else {
      console.error(new ContainersMismatchError())
    }
  }

  add(exercise) {
    if (Exercise.isExercise(exercise)) {
      this._items.push(exercise)
      return this
    } else {
      console.error(new ContainerItemsMismatchError())
    }
  }

  update(exercise) {
    if (Exercise.isExercise(exercise)) {
      console.log('ExerciseContainer update() called - NOT IMPLEMENTED')
    } else {
      console.error(new ContainerItemsMismatchError())
    }
  }

  remove(exercise) {
    if (Exercise.isExercise(exercise)) {
      console.log('ExerciseContainer remove() called - NOT IMPLEMENTED')
    } else {
      console.error(new ContainerItemsMismatchError())
    }
  }

  findByCategory(category) {
    return this._items.filter((item) => item.category === category)
  }

  findByEquipment(equipment) {
    return this._items.filter((item) => item.equipment === equipment)
  }
}
