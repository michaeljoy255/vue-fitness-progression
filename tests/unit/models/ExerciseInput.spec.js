import ExerciseInput from '../../../src/models/ExerciseInput.js'
import { INPUT_TYPE } from '../../../src/constants/globals.js'

describe('ExerciseInput', () => {
  it('initializes correctly', () => {
    const obj = new ExerciseInput()
    expect(obj).toBeInstanceOf(ExerciseInput)
    expect(obj.inputType).toBe(INPUT_TYPE.confirmation)
    expect(obj.hint).toEqual('')
  })
})
