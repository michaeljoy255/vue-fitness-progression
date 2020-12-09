import Exercise from '../../../src/models/Exercise.js'
import {
  DEFAULT_CATEGORY,
  DEFAULT_EQUIPMENT,
} from '../../../src/constants/defaults.js'

describe('Exercise', () => {
  it('initializes correctly', () => {
    const obj = new Exercise()
    expect(obj).toBeInstanceOf(Exercise)
    expect(typeof obj.id).toBe('string')
    expect(obj.name).toEqual('')
    expect(obj.description).toEqual('')
    expect(obj.previousRecord).toBeNull()
    expect(obj.category).toBe(DEFAULT_CATEGORY.misc)
    expect(obj.equipment).toBe(DEFAULT_EQUIPMENT.none)
    expect(obj.inputs).toEqual([])
  })
})
