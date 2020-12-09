import Workout from '../../../src/models/Workout.js'

describe('Workout', () => {
  it('initializes correctly', () => {
    const obj = new Workout()
    expect(obj).toBeInstanceOf(Workout)
    expect(typeof obj.id).toBe('string')
    expect(obj.name).toEqual('')
    expect(obj.description).toEqual('')
    expect(obj.previousRecord).toBeNull()
    expect(obj.exercises).toEqual([])
  })
})
