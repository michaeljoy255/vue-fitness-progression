import _Descriptors from '../../../src/models/_Descriptors.js'

describe('_Descriptors.js', () => {
  describe('constructor function', () => {
    it('creates object with correct defaults', () => {
      const obj = new _Descriptors()
      expect(obj).toBeInstanceOf(_Descriptors)
      expect(typeof obj.id).toBe('string')
      expect(obj.name).toEqual('')
      expect(obj.description).toEqual('')
      expect(obj.previousRecord).toBeNull()
    })

    it('creates object with correct values', () => {
      const values = {
        id: 'ABC123',
        name: 'Test Name',
        description: 'Test description text.',
        previousRecord: null, // WIP
      }
      const obj = new _Descriptors(values)
      expect(obj).toBeInstanceOf(_Descriptors)
      expect(obj).toMatchObject(values)
    })
  })

  describe('static methods', () => {
    it.skip('findByName', () => {
      expect(true).toBe(true) // WIP
    })

    it.skip('filterByDescriptionKeyword', () => {
      expect(true).toBe(true) // WIP
    })
  })
})
