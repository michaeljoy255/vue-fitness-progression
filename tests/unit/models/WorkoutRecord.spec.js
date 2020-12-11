import WorkoutRecord from '../../../src/models/WorkoutRecord.js'

describe('WorkoutRecord.js', () => {
  describe('constructor function', () => {
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
      const values = {
        id: 'ABC123',
        createdAt: new Date(),
        note: 'Test note text.',
        duration: 35000,
        workoutId: 'XYZ123',
      }
      const obj = new WorkoutRecord(values)
      expect(obj).toBeInstanceOf(WorkoutRecord)
      expect(obj).toMatchObject(values)
    })
  })

  describe('static methods', () => {
    it.skip('isWorkoutRecord', () => {
      expect(true).toBe(true) // WIP
    })

    it.skip('isWorkoutRecordArray', () => {
      expect(true).toBe(true) // WIP
    })

    it.skip('isWorkoutRecordArrayWithData', () => {
      expect(true).toBe(true) // WIP
    })

    it.skip('findByWorkoutId', () => {
      expect(true).toBe(true) // WIP
    })
  })
})
