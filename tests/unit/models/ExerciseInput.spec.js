import ExerciseInput from '../../../src/models/ExerciseInput.js'

describe('ExerciseInput.js', () => {
  describe('constructor function', () => {
    it('creates object with correct defaults', () => {
      const obj = new ExerciseInput()
      expect(obj).toBeInstanceOf(ExerciseInput)
      expect(obj.input).toEqual('Confirmation')
      expect(obj.hint).toEqual('')
    })

    it('creates object with correct values', () => {
      const values = {
        input: 'Sets',
        hint: '10-20',
      }
      const obj = new ExerciseInput(values)
      expect(obj).toBeInstanceOf(ExerciseInput)
      expect(obj).toMatchObject(values)
    })
  })

  describe('static methods', () => {
    it.skip('isExerciseInput', () => {
      expect(true).toBe(true) // WIP
    })

    it.skip('isExerciseInputArray', () => {
      expect(true).toBe(true) // WIP
    })

    it.skip('isExerciseInputArrayWithData', () => {
      expect(true).toBe(true) // WIP
    })
  })
})
