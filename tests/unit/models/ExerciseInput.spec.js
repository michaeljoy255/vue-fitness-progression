import ExerciseInput from '../../../src/models/ExerciseInput.js'

describe('ExerciseInput.js', () => {
  describe('constructor()', () => {
    it('creates object with correct defaults', () => {
      const obj = new ExerciseInput()
      expect(obj).toBeInstanceOf(ExerciseInput)
      expect(obj.inputType).toEqual('Confirmation')
      expect(obj.hint).toEqual('')
    })

    it('creates object with correct values', () => {
      expect(true).toBe(true) // WIP
    })
  })
})
