import _Id from '../../../src/models/_Id.js'

describe('_Id', () => {
  it('initializes correctly', () => {
    const obj = new _Id()
    expect(obj).toBeInstanceOf(_Id)
    expect(typeof obj.id).toBe('string')
  })
})
