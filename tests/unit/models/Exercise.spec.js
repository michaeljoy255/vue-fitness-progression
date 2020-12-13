import Exercise from '../../../src/models/Exercise.js'

describe('Exercise.js', () => {
  describe('constructor function', () => {
    it('creates object with correct defaults', () => {
      const obj = new Exercise()
      expect(obj).toBeInstanceOf(Exercise)
      expect(typeof obj.id).toBe('string')
      expect(obj.name).toEqual('')
      expect(obj.description).toEqual('')
      expect(obj.previousRecordId).toBeNull()
      expect(obj.category).toEqual('Miscellaneous')
      expect(obj.equipment).toEqual('None')
      expect(obj.inputs).toEqual([])
    })

    it('creates object with correct values', () => {
      class MockExerciseInput {}
      const values = {
        id: 'ABC123',
        name: 'Test Name',
        description: 'Test description text.',
        previousRecordId: 'XYZ123',
        category: 'Cardio',
        equipment: 'Barbell',
        inputs: [new MockExerciseInput(), new MockExerciseInput()],
      }
      const obj = new Exercise(values)
      expect(obj).toBeInstanceOf(Exercise)
      expect(obj).toMatchObject(values)
    })
  })

  describe('static methods', () => {
    const obj1 = new Exercise({
      category: 'Chest',
      equipment: 'Barbell',
    })
    const obj2 = new Exercise({
      category: 'Back',
      equipment: 'Plate',
    })
    const obj3 = new Exercise({
      category: 'Legs',
      equipment: 'None',
    })
    const items = [obj1, obj2, obj3]

    describe('isExercise method', () => {
      it('returns false with incorrect instances', () => {
        expect(Exercise.isExercise(null)).toBe(false)
        expect(Exercise.isExercise(123)).toBe(false)
        expect(Exercise.isExercise('X')).toBe(false)
      })

      it('returns true with correct instance', () => {
        expect(Exercise.isExercise(new Exercise())).toBe(true)
      })
    })

    describe('isExerciseArray method', () => {
      it('returns false if not an array or contains incorrect instances', () => {
        expect(Exercise.isExerciseArray(null)).toBe(false)
        expect(Exercise.isExerciseArray(new Exercise())).toBe(false)
        expect(Exercise.isExerciseArray(['X'])).toBe(false)
        expect(Exercise.isExerciseArray(['X', new Exercise()])).toBe(false)
      })

      it('returns true if is an array with correct instances or empty', () => {
        expect(Exercise.isExerciseArray([])).toBe(true)
        expect(Exercise.isExerciseArray([new Exercise()])).toBe(true)
      })
    })

    describe('isExerciseArrayWithData method', () => {
      it('returns false if not an array containing at least one correct instance', () => {
        expect(Exercise.isExerciseArrayWithData([])).toBe(false)
        expect(Exercise.isExerciseArrayWithData(['X', new Exercise()])).toBe(
          false
        )
      })

      it('returns true if is an array with at least one correct instance', () => {
        expect(Exercise.isExerciseArrayWithData([new Exercise()])).toBe(true)
      })
    })

    describe('findByCategory method', () => {
      it('throws an error with invalid inputs', () => {
        expect(() => Exercise.findByCategory(null, 'Chest')).toThrow()
      })

      it('returns undefined if no match is found', () => {
        expect(Exercise.findByCategory(items, null)).toBeUndefined()
        expect(Exercise.findByCategory(items, 123)).toBeUndefined()
        expect(Exercise.findByCategory(items, 'X')).toBeUndefined()
      })

      it('returns first match found', () => {
        expect(Exercise.findByCategory(items, 'Back')).toMatchObject(obj2)
      })
    })

    describe('findByEquipment method', () => {
      it('throws an error with invalid inputs', () => {
        expect(() => Exercise.findByEquipment(null, 'Barbell')).toThrow()
      })

      it('returns undefined if no match is found', () => {
        expect(Exercise.findByEquipment(items, null)).toBeUndefined()
        expect(Exercise.findByEquipment(items, 123)).toBeUndefined()
        expect(Exercise.findByEquipment(items, 'X')).toBeUndefined()
      })

      it('returns first match found', () => {
        expect(Exercise.findByEquipment(items, 'Plate')).toMatchObject(obj2)
      })
    })
  })
})
