import { INPUT } from '../constants/globals.js'

export default class ExerciseInput {
  constructor({ input = INPUT.confirmation, hint = '' } = {}) {
    this.input = input
    this.hint = hint
  }
}
