import Workout from '../../../src/models/Workout.js'

describe('Workout.js', () => {
  describe('constructor', () => {
    it('creates object with correct defaults', () => {
      const obj = new Workout()
      expect(obj).toBeInstanceOf(Workout)
      expect(typeof obj.id).toBe('string')
      expect(obj.name).toEqual('')
      expect(obj.description).toEqual('')
      expect(obj.previousRecordId).toBeNull()
      expect(obj.exerciseIds).toEqual([])
    })

    it('creates object with correct values', () => {
      const values = {
        id: 'ABC123',
        name: 'Test Name',
        description: 'Test description text.',
        previousRecordId: 'XYZ123',
        exerciseIds: ['QWE123', 'MNB123'],
      }
      const obj = new Workout(values)
      expect(obj).toBeInstanceOf(Workout)
      expect(obj).toMatchObject(values)
    })
  })
})
