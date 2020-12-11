import { INPUT } from '../constants/globals.js'

export default class ExerciseInput {
  constructor({ input = INPUT.confirmation, hint = '' } = {}) {
    this.input = input
    this.hint = hint
  }

  static isExerciseInput(input) {
    return input instanceof ExerciseInput
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
