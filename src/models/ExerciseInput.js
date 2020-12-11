import { INPUT } from '../constants/globals.js'

export default class ExerciseInput {
  constructor({ input = INPUT.confirmation, hint = '' } = {}) {
    this.input = input
    this.hint = hint
  }

  static isExerciseInput(input) {
    return input instanceof ExerciseInput
  }

  static isExerciseInputArray(items) {
    return (
      Array.isArray(items) &&
      items.every((i) => ExerciseInput.isExerciseInput(i))
    )
  }

  static isExerciseInputArrayWithData(items) {
    return ExerciseInput.isExerciseInputArray(items) && items.length > 0
  }

  getInputTypeUnit() {
    switch (this.input) {
      case 'Sets':
        // do correct icon and unit
        break

      default:
        break
    }
  }
}
