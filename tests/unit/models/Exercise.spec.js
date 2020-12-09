import Exercise from '../../../src/models/Exercise.js'

describe('Exercise', () => {
  it('initializes correctly', () => {
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
})
