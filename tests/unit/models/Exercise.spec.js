import Exercise from '../../../src/models/Exercise.js'

describe('Exercise.js', () => {
  describe('constructor', () => {
    it('creates object with correct defaults', () => {
      const obj = new Exercise()
      expect(obj).toBeInstanceOf(Exercise)
      expect(typeof obj.id).toBe('string')
      expect(obj.name).toEqual('')
      expect(obj.description).toEqual('')
      expect(obj.previousRecord).toBeNull()
      expect(obj.category).toEqual('Miscellaneous')
      expect(obj.equipment).toEqual('None')
      expect(obj.inputs).toEqual([])
    })

    it('creates object with correct values', () => {
      const values = {
        id: 'ABC123',
        name: 'Test Name',
        description: 'Test description text.',
        previousRecord: null, // WIP
        category: 'Cardio',
        equipment: 'Barbell',
        inputs: [], // WIP
      }
      const obj = new Exercise(values)
      expect(obj).toBeInstanceOf(Exercise)
      expect(obj).toMatchObject(values)
    })
  })

  describe('static methods', () => {
    it.skip('isExercise', () => {
      expect(true).toBe(true) // WIP
    })

    it.skip('isExerciseArray', () => {
      expect(true).toBe(true) // WIP
    })

    it.skip('isExerciseArrayWithData', () => {
      expect(true).toBe(true) // WIP
    })

    it.skip('findByCategory', () => {
      expect(true).toBe(true) // WIP
    })

    it.skip('findByEquipment', () => {
      expect(true).toBe(true) // WIP
    })
  })
})
