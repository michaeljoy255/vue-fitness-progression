import ExerciseSet from '../../../src/models/ExerciseSet.js'

describe('ExerciseSet.js', () => {
  describe('constructor', () => {
    it('creates object with correct defaults', () => {
      const obj = new ExerciseSet()
      expect(obj).toBeInstanceOf(ExerciseSet)
      expect(obj.weight).toEqual(0)
      expect(obj.reps).toEqual(0)
      expect(obj.duration).toEqual(0)
      expect(obj.distance).toEqual(0)
    })

    it('creates object with correct values', () => {
      const values = {
        weight: 75,
        reps: 15,
        duration: 35000,
        distance: 1.5,
      }
      const obj = new ExerciseSet(values)
      expect(obj).toBeInstanceOf(ExerciseSet)
      expect(obj).toMatchObject(values)
    })
  })

  describe('static methods', () => {
    describe('isExerciseSet', () => {
      it('returns false with incorrect instances', () => {
        expect(ExerciseSet.isExerciseSet(null)).toBe(false)
        expect(ExerciseSet.isExerciseSet(123)).toBe(false)
        expect(ExerciseSet.isExerciseSet('X')).toBe(false)
      })

      it('returns true with correct instance', () => {
        expect(ExerciseSet.isExerciseSet(new ExerciseSet())).toBe(true)
      })
    })

    describe('isExerciseSetArray', () => {
      it('returns false if not an array or contains incorrect instances', () => {
        expect(ExerciseSet.isExerciseSetArray(null)).toBe(false)
        expect(ExerciseSet.isExerciseSetArray(new ExerciseSet())).toBe(false)
        expect(ExerciseSet.isExerciseSetArray(['X'])).toBe(false)
        expect(ExerciseSet.isExerciseSetArray(['X', new ExerciseSet()])).toBe(
          false
        )
      })

      it('returns true if is an array with correct instances or empty', () => {
        expect(ExerciseSet.isExerciseSetArray([])).toBe(true)
        expect(ExerciseSet.isExerciseSetArray([new ExerciseSet()])).toBe(true)
      })
    })

    describe('isExerciseSetArrayWithData', () => {
      it('returns false if not an array containing at least one correct instance', () => {
        expect(ExerciseSet.isExerciseSetArrayWithData([])).toBe(false)
        expect(
          ExerciseSet.isExerciseSetArrayWithData(['X', new ExerciseSet()])
        ).toBe(false)
      })

      it('returns true if is an array with at least one correct instance', () => {
        expect(
          ExerciseSet.isExerciseSetArrayWithData([new ExerciseSet()])
        ).toBe(true)
      })
    })
  })
})
