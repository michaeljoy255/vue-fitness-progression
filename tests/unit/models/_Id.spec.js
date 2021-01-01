import _Entity from '../../../src/models/_Entity.js'

describe('_Entity.js', () => {
  describe('constructor', () => {
    it('creates object with correct defaults', () => {
      const obj = new _Entity()
      expect(obj).toBeInstanceOf(_Entity)
      expect(typeof obj.id).toBe('string')
    })

    it('creates object with correct values', () => {
      const values = { id: 'ABC123' }
      const obj = new _Entity(values)
      expect(obj).toBeInstanceOf(_Entity)
      expect(obj).toMatchObject(values)
    })
  })

  describe('static methods', () => {
    const obj1 = new _Entity({ id: 'Test 1' })
    const obj2 = new _Entity({ id: 'Testing 2' })
    const obj3 = new _Entity({ id: 'Testie 3' })
    const items = [obj1, obj2, obj3]

    describe('findById', () => {
      it('throws an error with invalid inputs', () => {
        expect(() => _Entity.findById(null, 'Test')).toThrow()
      })

      it('returns undefined if no match is found', () => {
        expect(_Entity.findById(items, null)).toBeUndefined()
        expect(_Entity.findById(items, 123)).toBeUndefined()
        expect(_Entity.findById(items, 'X')).toBeUndefined()
      })

      it('returns first match found', () => {
        expect(_Entity.findById(items, 'Testing 2')).toMatchObject(obj2)
      })
    })
  })
})
