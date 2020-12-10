import ExerciseSet from '../../../src/models/ExerciseSet.js'

describe('ExerciseSet.js', () => {
  describe('constructor()', () => {
    it('creates object with correct defaults', () => {
      const obj = new ExerciseSet()
      expect(obj).toBeInstanceOf(ExerciseSet)
      expect(obj.weight).toEqual(0)
      expect(obj.reps).toEqual(0)
      expect(obj.duration).toEqual(0)
      expect(obj.distance).toEqual(0)
    })

    it('creates object with correct values', () => {
      expect(true).toBe(true) // WIP
    })
  })
})
