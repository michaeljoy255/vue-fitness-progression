import WorkoutRecord from '../../../src/models/WorkoutRecord.js'

describe('WorkoutRecord.js', () => {
  describe('constructor()', () => {
    it('creates object with correct defaults', () => {
      const obj = new WorkoutRecord()
      expect(obj).toBeInstanceOf(WorkoutRecord)
      expect(typeof obj.id).toBe('string')
      expect(typeof obj.createdAt).toBe('object') // May store as string later
      expect(obj.note).toEqual('')
      expect(obj.duration).toEqual(0)
      expect(obj.workoutId).toBeNull()
    })

    it('creates object with correct values', () => {
      expect(true).toBe(true) // WIP
    })
  })
})
