import Workout from '../../../src/models/Workout.js'

describe('Workout.js', () => {
  describe('constructor function', () => {
    it('creates object with correct defaults', () => {
      const obj = new Workout()
      expect(obj).toBeInstanceOf(Workout)
      expect(typeof obj.id).toBe('string')
      expect(obj.name).toEqual('')
      expect(obj.description).toEqual('')
      expect(obj.previousRecord).toBeNull()
      expect(obj.exercises).toEqual([])
    })

    it('creates object with correct values', () => {
      const values = {
        id: 'ABC123',
        name: 'Test Name',
        description: 'Test description text.',
        previousRecord: null, // WIP
        exercises: [], // WIP
      }
      const obj = new Workout(values)
      expect(obj).toBeInstanceOf(Workout)
      expect(obj).toMatchObject(values)
    })
  })

  describe('static methods', () => {
    it.skip('isWorkout', () => {
      expect(true).toBe(true) // WIP
    })

    it.skip('isWorkoutArray', () => {
      expect(true).toBe(true) // WIP
    })

    it.skip('isWorkoutArrayWithData', () => {
      expect(true).toBe(true) // WIP
    })
  })
})
