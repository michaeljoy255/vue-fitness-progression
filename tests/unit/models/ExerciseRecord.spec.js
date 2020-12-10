import ExerciseRecord from '../../../src/models/ExerciseRecord.js'

describe('ExerciseRecord.js', () => {
  describe('constructor()', () => {
    it('creates object with correct defaults', () => {
      const obj = new ExerciseRecord()
      expect(obj).toBeInstanceOf(ExerciseRecord)
      expect(typeof obj.id).toBe('string')
      expect(typeof obj.createdAt).toBe('object') // May store as string later
      expect(obj.note).toEqual('')
      expect(obj.sets).toEqual([])
      expect(obj.exerciseId).toBeNull()
    })

    it('creates object with correct values', () => {
      expect(true).toBe(true) // WIP
    })
  })
})
