import _Activity from '../../../src/models/_Activity.js'

describe('_Activity.js', () => {
  describe('constructor', () => {
    it('creates object with correct defaults', () => {
      const obj = new _Activity()
      expect(obj).toBeInstanceOf(_Activity)
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
      const obj = new _Activity(values)
      expect(obj).toBeInstanceOf(_Activity)
      expect(obj).toMatchObject(values)
    })
  })

  describe('static methods', () => {
    const obj1 = new _Activity({
      name: 'Test 1',
      description: 'Test 1 description here.',
    })
    const obj2 = new _Activity({
      name: 'Testing 2',
      description: 'Testing 2 description here.',
    })
    const obj3 = new _Activity({
      name: 'Testie 3',
      description: 'Testie 3 description here.',
    })
    const items = [obj1, obj2, obj3]

    describe('findByName', () => {
      it('throws an error with invalid inputs', () => {
        expect(() => _Activity.findByName(null, 'Test')).toThrow()
      })

      it('returns undefined if no match is found', () => {
        expect(_Activity.findByName(items, null)).toBeUndefined()
        expect(_Activity.findByName(items, 123)).toBeUndefined()
        expect(_Activity.findByName(items, 'X')).toBeUndefined()
      })

      it('returns first match found', () => {
        expect(_Activity.findByName(items, 'Testing 2')).toMatchObject(obj2)
      })
    })

    describe('filterByDescriptionKeyword', () => {
      it('throws an error with invalid inputs', () => {
        expect(() =>
          _Activity.filterByDescriptionKeyword(null, 'Test')
        ).toThrow()
        expect(() =>
          _Activity.filterByDescriptionKeyword(items, null)
        ).toThrow()
        expect(() => _Activity.filterByDescriptionKeyword(items, 123)).toThrow()
      })

      it('returns empty array if no matches are found', () => {
        const results = _Activity.filterByDescriptionKeyword(items, 'XYZ')
        expect(results).toEqual([])
      })

      it('returns array of matches', () => {
        const results = _Activity.filterByDescriptionKeyword(items, 'Testi')
        expect(Array.isArray(results)).toBe(true)
        expect(results.length).toEqual(2)
      })
    })
  })
})
