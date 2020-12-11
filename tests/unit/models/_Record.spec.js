import _Record from '../../../src/models/_Record.js'

describe('_Record.js', () => {
  describe('constructor function', () => {
    it('creates object with correct defaults', () => {
      const obj = new _Record()
      expect(obj).toBeInstanceOf(_Record)
      expect(typeof obj.id).toBe('string')
      expect(typeof obj.createdAt).toBe('object') // May store as string later
      expect(obj.note).toEqual('')
    })

    it('creates object with correct values', () => {
      const values = {
        id: 'ABC123',
        createdAt: new Date(),
        note: 'Test note text.',
      }
      const obj = new _Record(values)
      expect(obj).toBeInstanceOf(_Record)
      expect(obj).toMatchObject(values)
    })
  })

  describe('static methods', () => {
    it.skip('findByDate', () => {
      expect(true).toBe(true) // WIP
    })

    it.skip('findByNewest', () => {
      expect(true).toBe(true) // WIP
    })

    it.skip('findByOldest', () => {
      expect(true).toBe(true) // WIP
    })

    it.skip('findBetweenDates', () => {
      expect(true).toBe(true) // WIP
    })

    it.skip('filterByNoteKeyword', () => {
      expect(true).toBe(true) // WIP
    })
  })
})
