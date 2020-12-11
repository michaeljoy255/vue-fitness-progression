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
    const obj1 = new WorkoutRecord({ workoutId: 'ABC123' })
    const obj2 = new WorkoutRecord({ workoutId: 'XYZ123' })
    const obj3 = new WorkoutRecord({ workoutId: 'QWE123' })
    const items = [obj1, obj2, obj3]

    describe('isWorkoutRecord method', () => {
      it('returns false with incorrect instances', () => {
        expect(WorkoutRecord.isWorkoutRecord(null)).toBe(false)
        expect(WorkoutRecord.isWorkoutRecord(123)).toBe(false)
        expect(WorkoutRecord.isWorkoutRecord('X')).toBe(false)
      })

      it('returns true with correct instance', () => {
        expect(WorkoutRecord.isWorkoutRecord(new WorkoutRecord())).toBe(true)
      })
    })

    describe('isWorkoutRecordArray method', () => {
      it('returns false if not an array or contains incorrect instances', () => {
        expect(WorkoutRecord.isWorkoutRecordArray(null)).toBe(false)
        expect(WorkoutRecord.isWorkoutRecordArray(new WorkoutRecord())).toBe(
          false
        )
        expect(WorkoutRecord.isWorkoutRecordArray(['X'])).toBe(false)
        expect(
          WorkoutRecord.isWorkoutRecordArray(['X', new WorkoutRecord()])
        ).toBe(false)
      })

      it('returns true if is an array with correct instances or empty', () => {
        expect(WorkoutRecord.isWorkoutRecordArray([])).toBe(true)
        expect(WorkoutRecord.isWorkoutRecordArray([new WorkoutRecord()])).toBe(
          true
        )
      })
    })

    describe('isWorkoutRecordArrayWithData method', () => {
      it('returns false if not an array containing at least one correct instance', () => {
        expect(WorkoutRecord.isWorkoutRecordArrayWithData([])).toBe(false)
        expect(
          WorkoutRecord.isWorkoutRecordArrayWithData(['X', new WorkoutRecord()])
        ).toBe(false)
      })

      it('returns true if is an array with at least one correct instance', () => {
        expect(
          WorkoutRecord.isWorkoutRecordArrayWithData([new WorkoutRecord()])
        ).toBe(true)
      })
    })

    describe('findByWorkoutId method', () => {
      it('throws an error with invalid inputs', () => {
        expect(() => WorkoutRecord.findByWorkoutId(null, 'ABC123')).toThrow()
      })

      it('returns undefined if no match is found', () => {
        expect(WorkoutRecord.findByWorkoutId(items, null)).toBeUndefined()
        expect(WorkoutRecord.findByWorkoutId(items, 123)).toBeUndefined()
        expect(WorkoutRecord.findByWorkoutId(items, 'X')).toBeUndefined()
      })

      it('returns first match found', () => {
        expect(WorkoutRecord.findByWorkoutId(items, 'XYZ123')).toMatchObject(
          obj2
        )
      })
    })
  })
})
