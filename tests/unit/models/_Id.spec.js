import _Id from '../../../src/models/_Id.js'

describe('_Id.js', () => {
  describe('constructor()', () => {
    it('creates object with correct defaults', () => {
      const obj = new _Id()
      expect(obj).toBeInstanceOf(_Id)
      expect(typeof obj.id).toBe('string')
    })

    it('creates object with correct values', () => {
      expect(true).toBe(true) // WIP
    })
  })
})
