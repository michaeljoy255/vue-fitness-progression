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

  fromArray(exercises) {
    if (
      Array.isArray(exercises) &&
      exercises.every((i) => Exercise.isExercise(i))
    ) {
      this._items = exercises
      return this
    } else {
      throw new ExerciseContainerMismatchError()
    }
  }

  fromContainer(exercises) {
    if (ExerciseContainer.isExerciseContainer(exercises)) {
      this._items = exercises.toArray()
      return this
    } else {
      throw new ExerciseContainerMismatchError()
    }
  }

  add(exercise) {
    if (Exercise.isExercise(exercise)) {
      this._items.push(exercise)
      return this
    } else {
      throw new ExerciseContainerMismatchError()
    }
  }

  update(exercise) {
    if (Exercise.isExercise(exercise)) {
      console.log('ExerciseContainer update() called - NOT IMPLEMENTED')
    } else {
      throw new ExerciseContainerMismatchError()
    }
  }

  remove(exercise) {
    if (Exercise.isExercise(exercise)) {
      console.log('ExerciseContainer remove() called - NOT IMPLEMENTED')
    } else {
      throw new ExerciseContainerMismatchError()
    }
  }

  findByCategory(category) {
    return this._items.filter((item) => item.category === category)
  }

  findByEquipment(equipment) {
    return this._items.filter((item) => item.equipment === equipment)
  }
}
