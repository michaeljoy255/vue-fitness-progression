import _Descriptors from '../../../src/models/_Descriptors.js'

describe('_Descriptors.js', () => {
  describe('constructor()', () => {
    it('creates object with correct defaults', () => {
      const obj = new _Descriptors()
      expect(obj).toBeInstanceOf(_Descriptors)
      expect(typeof obj.id).toBe('string')
      expect(obj.name).toEqual('')
      expect(obj.description).toEqual('')
      expect(obj.previousRecord).toBeNull()
    })

    it('creates object with correct values', () => {
      expect(true).toBe(true) // WIP
    })
  })
})
