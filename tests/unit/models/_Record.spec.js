import _Record from '../../../src/models/_Record.js'

describe('_Record.js', () => {
  describe('constructor()', () => {
    it('creates object with correct defaults', () => {
      const obj = new _Record()
      expect(obj).toBeInstanceOf(_Record)
      expect(typeof obj.id).toBe('string')
      expect(typeof obj.createdAt).toBe('object') // May store as string later
      expect(obj.note).toEqual('')
    })

    it('creates object with correct values', () => {
      expect(true).toBe(true) // WIP
    })
  })
})
