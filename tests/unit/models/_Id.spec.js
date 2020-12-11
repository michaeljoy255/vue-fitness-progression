import _Id from '../../../src/models/_Id.js'

describe('_Id.js', () => {
  describe('constructor function', () => {
    it('creates object with correct defaults', () => {
      const obj = new _Id()
      expect(obj).toBeInstanceOf(_Id)
      expect(typeof obj.id).toBe('string')
    })

    it('creates object with correct values', () => {
      const values = { id: 'ABC123' }
      const obj = new _Id(values)
      expect(obj).toBeInstanceOf(_Id)
      expect(obj).toMatchObject(values)
    })
  })

  describe('static methods', () => {
    it.skip('findById', () => {
      expect(true).toBe(true) // WIP
    })
  })
})
