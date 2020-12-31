import * as utils from '../../../../src/utils/store/defaults.js'

describe('defaults.js', () => {
  describe('getDefaultExercises', () => {
    it('returns the default exercises in an array', () => {
      const defaultExercises = utils.getDefaultExercises()
      expect(Array.isArray(defaultExercises)).toBe(true)
      expect(defaultExercises.length).toEqual(75)
    })
  })

  describe('getDefaultWorkouts', () => {
    it('returns the default workouts in an array', () => {
      const defaultWorkouts = utils.getDefaultWorkouts()
      expect(Array.isArray(defaultWorkouts)).toBe(true)
      expect(defaultWorkouts.length).toEqual(5)
    })
  })
})
