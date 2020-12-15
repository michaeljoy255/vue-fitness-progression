import Workout from '../../../src/models/Workout.js'

describe('Workout.js', () => {
  describe('constructor function', () => {
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

  describe('static methods', () => {
    describe('isWorkout method', () => {
      it('returns false with incorrect instances', () => {
        expect(Workout.isWorkout(null)).toBe(false)
        expect(Workout.isWorkout(123)).toBe(false)
        expect(Workout.isWorkout('X')).toBe(false)
      })

      it('returns true with correct instance', () => {
        expect(Workout.isWorkout(new Workout())).toBe(true)
      })
    })

    describe('isWorkoutArray method', () => {
      it('returns false if not an array or contains incorrect instances', () => {
        expect(Workout.isWorkoutArray(null)).toBe(false)
        expect(Workout.isWorkoutArray(new Workout())).toBe(false)
        expect(Workout.isWorkoutArray(['X'])).toBe(false)
        expect(Workout.isWorkoutArray(['X', new Workout()])).toBe(false)
      })

      it('returns true if is an array with correct instances or empty', () => {
        expect(Workout.isWorkoutArray([])).toBe(true)
        expect(Workout.isWorkoutArray([new Workout()])).toBe(true)
      })
    })

    describe('isWorkoutArrayWithData method', () => {
      it('returns false if not an array containing at least one correct instance', () => {
        expect(Workout.isWorkoutArrayWithData([])).toBe(false)
        expect(Workout.isWorkoutArrayWithData(['X', new Workout()])).toBe(false)
      })

      it('returns true if is an array with at least one correct instance', () => {
        expect(Workout.isWorkoutArrayWithData([new Workout()])).toBe(true)
      })
    })
  })
})
