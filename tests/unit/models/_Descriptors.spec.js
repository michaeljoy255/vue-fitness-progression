import _Descriptors from '../../../src/models/_Descriptors.js'

describe('_Descriptors.js', () => {
  describe('constructor', () => {
    it('creates object with correct defaults', () => {
      const obj = new _Descriptors()
      expect(obj).toBeInstanceOf(_Descriptors)
      expect(typeof obj.id).toBe('string')
      expect(obj.name).toEqual('')
      expect(obj.description).toEqual('')
      expect(obj.previousRecordId).toBeNull()
    })

    it('creates object with correct values', () => {
      const values = {
        id: 'ABC123',
        name: 'Test Name',
        description: 'Test description text.',
        previousRecordId: 'XYZ123',
      }
      const obj = new _Descriptors(values)
      expect(obj).toBeInstanceOf(_Descriptors)
      expect(obj).toMatchObject(values)
    })
  })

  describe('static methods', () => {
    const obj1 = new _Descriptors({
      name: 'Test 1',
      description: 'Test 1 description here.',
    })
    const obj2 = new _Descriptors({
      name: 'Testing 2',
      description: 'Testing 2 description here.',
    })
    const obj3 = new _Descriptors({
      name: 'Testie 3',
      description: 'Testie 3 description here.',
    })
    const items = [obj1, obj2, obj3]

    describe('findByName', () => {
      it('throws an error with invalid inputs', () => {
        expect(() => _Descriptors.findByName(null, 'Test')).toThrow()
      })

      it('returns undefined if no match is found', () => {
        expect(_Descriptors.findByName(items, null)).toBeUndefined()
        expect(_Descriptors.findByName(items, 123)).toBeUndefined()
        expect(_Descriptors.findByName(items, 'X')).toBeUndefined()
      })

      it('returns first match found', () => {
        expect(_Descriptors.findByName(items, 'Testing 2')).toMatchObject(obj2)
      })
    })

    describe('filterByDescriptionKeyword', () => {
      it('throws an error with invalid inputs', () => {
        expect(() =>
          _Descriptors.filterByDescriptionKeyword(null, 'Test')
        ).toThrow()
        expect(() =>
          _Descriptors.filterByDescriptionKeyword(items, null)
        ).toThrow()
        expect(() =>
          _Descriptors.filterByDescriptionKeyword(items, 123)
        ).toThrow()
      })

      it('returns empty array if no matches are found', () => {
        const results = _Descriptors.filterByDescriptionKeyword(items, 'XYZ')
        expect(results).toEqual([])
      })

      it('returns array of matches', () => {
        const results = _Descriptors.filterByDescriptionKeyword(items, 'Testi')
        expect(Array.isArray(results)).toBe(true)
        expect(results.length).toEqual(2)
      })
    })
  })
})
