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
      class MockExerciseSet {}
      const values = {
        id: 'ABC123',
        createdAt: new Date(),
        note: 'Test note text.',
        sets: [new MockExerciseSet(), new MockExerciseSet()],
        exerciseId: 'XYZ123',
      }
      const obj = new ExerciseRecord(values)
      expect(obj).toBeInstanceOf(ExerciseRecord)
      expect(obj).toMatchObject(values)
    })
  })

  describe('static methods', () => {
    const obj1 = new ExerciseRecord({ exerciseId: 'ABC123' })
    const obj2 = new ExerciseRecord({ exerciseId: 'XYZ123' })
    const obj3 = new ExerciseRecord({ exerciseId: 'QWE123' })
    const items = [obj1, obj2, obj3]

    describe('isExerciseRecord method', () => {
      it('returns false with incorrect instances', () => {
        expect(ExerciseRecord.isExerciseRecord(null)).toBe(false)
        expect(ExerciseRecord.isExerciseRecord(123)).toBe(false)
        expect(ExerciseRecord.isExerciseRecord('X')).toBe(false)
      })

      it('returns true with correct instance', () => {
        expect(ExerciseRecord.isExerciseRecord(new ExerciseRecord())).toBe(true)
      })
    })

    describe('isExerciseRecordArray method', () => {
      it('returns false if not an array or contains incorrect instances', () => {
        expect(ExerciseRecord.isExerciseRecordArray(null)).toBe(false)
        expect(ExerciseRecord.isExerciseRecordArray(new ExerciseRecord())).toBe(
          false
        )
        expect(ExerciseRecord.isExerciseRecordArray(['X'])).toBe(false)
        expect(
          ExerciseRecord.isExerciseRecordArray(['X', new ExerciseRecord()])
        ).toBe(false)
      })

      it('returns true if is an array with correct instances or empty', () => {
        expect(ExerciseRecord.isExerciseRecordArray([])).toBe(true)
        expect(
          ExerciseRecord.isExerciseRecordArray([new ExerciseRecord()])
        ).toBe(true)
      })
    })

    describe('isExerciseRecordArrayWithData method', () => {
      it('returns false if not an array containing at least one correct instance', () => {
        expect(ExerciseRecord.isExerciseRecordArrayWithData([])).toBe(false)
        expect(
          ExerciseRecord.isExerciseRecordArrayWithData([
            'X',
            new ExerciseRecord(),
          ])
        ).toBe(false)
      })

      it('returns true if is an array with at least one correct instance', () => {
        expect(
          ExerciseRecord.isExerciseRecordArrayWithData([new ExerciseRecord()])
        ).toBe(true)
      })
    })

    describe('findByExerciseId method', () => {
      it('throws an error with invalid inputs', () => {
        expect(() => ExerciseRecord.findByExerciseId(null, 'ABC123')).toThrow()
      })

      it('returns undefined if no match is found', () => {
        expect(ExerciseRecord.findByExerciseId(items, null)).toBeUndefined()
        expect(ExerciseRecord.findByExerciseId(items, 123)).toBeUndefined()
        expect(ExerciseRecord.findByExerciseId(items, 'X')).toBeUndefined()
      })

      it('returns first match found', () => {
        expect(ExerciseRecord.findByExerciseId(items, 'XYZ123')).toMatchObject(
          obj2
        )
      })
    })
  })
})
