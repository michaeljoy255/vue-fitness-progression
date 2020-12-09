import { INPUT_TYPE } from '../constants/globals.js'
import { InstanceError } from '../utils/errors.js'

/**
 *
 */
export default class ExerciseInput {
  constructor({ inputType = INPUT_TYPE.confirmation, hint = null } = {}) {
    this._inputType = inputType
    this._hint = hint
  }

  static isExerciseInput(input) {
    return input instanceof ExerciseInput
  }

  static exportData(input) {
    if (ExerciseInput.isExerciseInput(input)) {
      return {
        inputType: input._inputType,
        hint: input._hint,
      }
    } else {
      console.error(new InstanceError('ExerciseInput'))
    }
  }

  static importData(input) {
    if (!input) return null

    return new ExerciseInput({
      inputType: input.inputType,
      hint: input.hint,
    })
  }

  get inputType() {
    return this._inputType
  }

  get hint() {
    return this._hint
  }

  set inputType(inputType) {
    this._inputType = inputType
  }

  set hint(hint) {
    this._hint = hint
  }

  getInputTypeUnit() {
    switch (this._inputType) {
      case 'Sets':
        // do correct icon and unit
        break

      default:
        break
    }
  }
}
