import _Descriptors from '../../../src/models/_Descriptors.js'

describe('_Descriptors', () => {
  it('initializes correctly', () => {
    const obj = new _Descriptors()
    expect(obj).toBeInstanceOf(_Descriptors)
    expect(typeof obj.id).toBe('string')
    expect(obj.name).toEqual('')
    expect(obj.description).toEqual('')
    expect(obj.previousRecord).toBeNull()
  })
})
