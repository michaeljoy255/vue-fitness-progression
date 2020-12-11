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
    describe('isExerciseInput method', () => {
      it('returns false with incorrect instances', () => {
        expect(ExerciseInput.isExerciseInput(null)).toBe(false)
        expect(ExerciseInput.isExerciseInput(123)).toBe(false)
        expect(ExerciseInput.isExerciseInput('X')).toBe(false)
      })

      it('returns true with correct instance', () => {
        expect(ExerciseInput.isExerciseInput(new ExerciseInput())).toBe(true)
      })
    })

    describe('isExerciseInputArray method', () => {
      it('returns false if not an array or contains incorrect instances', () => {
        expect(ExerciseInput.isExerciseInputArray(null)).toBe(false)
        expect(ExerciseInput.isExerciseInputArray(new ExerciseInput())).toBe(
          false
        )
        expect(ExerciseInput.isExerciseInputArray(['X'])).toBe(false)
        expect(
          ExerciseInput.isExerciseInputArray(['X', new ExerciseInput()])
        ).toBe(false)
      })

      it('returns true if is an array with correct instances or empty', () => {
        expect(ExerciseInput.isExerciseInputArray([])).toBe(true)
        expect(ExerciseInput.isExerciseInputArray([new ExerciseInput()])).toBe(
          true
        )
      })
    })

    describe('isExerciseInputArrayWithData method', () => {
      it('returns false if not an array containing at least one correct instance', () => {
        expect(ExerciseInput.isExerciseInputArrayWithData([])).toBe(false)
        expect(
          ExerciseInput.isExerciseInputArrayWithData(['X', new ExerciseInput()])
        ).toBe(false)
      })

      it('returns true if is an array with at least one correct instance', () => {
        expect(
          ExerciseInput.isExerciseInputArrayWithData([new ExerciseInput()])
        ).toBe(true)
      })
    })
  })
})
