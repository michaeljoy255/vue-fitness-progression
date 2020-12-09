import ExerciseInput from '../../../src/models/ExerciseInput.js'

describe('ExerciseInput', () => {
  it('initializes correctly', () => {
    const obj = new ExerciseInput()
    expect(obj).toBeInstanceOf(ExerciseInput)
    expect(obj.inputType).toEqual('Confirmation')
    expect(obj.hint).toEqual('')
  })
})
