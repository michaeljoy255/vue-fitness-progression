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
      expect(true).toBe(true) // WIP
    })
  })
})
