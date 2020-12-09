import { INPUT_TYPE } from '../constants/globals.js'

export default class ExerciseInput {
  constructor({ inputType = INPUT_TYPE.confirmation, hint = '' } = {}) {
    this.inputType = inputType
    this.hint = hint
  }

  static isExerciseInput(input) {
    return input instanceof ExerciseInput
  }

  getInputTypeUnit() {
    switch (this.inputType) {
      case 'Sets':
        // do correct icon and unit
        break

      default:
        break
    }
  }
}
