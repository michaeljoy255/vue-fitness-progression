import ExerciseInput from '../../../src/models/ExerciseInput.js'

describe('ExerciseInput.js', () => {
  describe('constructor', () => {
    it('creates object with correct defaults', () => {
      const obj = new ExerciseInput()
      expect(obj).toBeInstanceOf(ExerciseInput)
      expect(obj.name).toBeNull()
      expect(obj.hint).toEqual('')
    })

    it('creates object with correct values', () => {
      const values = {
        name: 'Sets',
        hint: '10-20',
      }
      const obj = new ExerciseInput(values)
      expect(obj).toBeInstanceOf(ExerciseInput)
      expect(obj).toMatchObject(values)
    })
  })
})
