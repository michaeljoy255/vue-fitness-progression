import _Record from '../../../src/models/_Record.js'

describe('_Record', () => {
  it('initializes correctly', () => {
    const obj = new _Record()
    expect(obj).toBeInstanceOf(_Record)
    expect(typeof obj.id).toBe('string')
    expect(typeof obj.createdAt).toBe('object') // May store as string later
    expect(obj.note).toEqual('')
  })
})
