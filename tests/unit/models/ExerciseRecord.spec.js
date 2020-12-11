import ExerciseRecord from '../../../src/models/ExerciseRecord.js'

describe('ExerciseRecord.js', () => {
  describe('constructor function', () => {
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
      const values = {
        id: 'ABC123',
        createdAt: new Date(),
        note: 'Test note text.',
        sets: [], // WIP
        exerciseId: 'XYZ123',
      }
      const obj = new ExerciseRecord(values)
      expect(obj).toBeInstanceOf(ExerciseRecord)
      expect(obj).toMatchObject(values)
    })
  })

  describe('static methods', () => {
    it.skip('isExerciseRecord', () => {
      expect(true).toBe(true) // WIP
    })

    it.skip('isExerciseRecordArray', () => {
      expect(true).toBe(true) // WIP
    })

    it.skip('isExerciseRecordArrayWithData', () => {
      expect(true).toBe(true) // WIP
    })

    it.skip('findByExerciseId', () => {
      expect(true).toBe(true) // WIP
    })
  })
})
