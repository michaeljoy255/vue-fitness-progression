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
    const obj1 = new _Id({ id: 'Test 1' })
    const obj2 = new _Id({ id: 'Testing 2' })
    const obj3 = new _Id({ id: 'Testie 3' })
    const items = [obj1, obj2, obj3]

    describe('findById method', () => {
      it('throws an error with invalid inputs', () => {
        expect(() => _Id.findById(null, 'Test')).toThrow()
      })

      it('returns undefined if no match is found', () => {
        expect(_Id.findById(items, null)).toBeUndefined()
        expect(_Id.findById(items, 123)).toBeUndefined()
        expect(_Id.findById(items, 'X')).toBeUndefined()
      })

      it('returns first match found', () => {
        expect(_Id.findById(items, 'Testing 2')).toMatchObject(obj2)
      })
    })
  })
})
