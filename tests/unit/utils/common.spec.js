import * as CommonUtils from '../../../src/utils/common.js'

describe('common.js', () => {
  describe('isUndef()', () => {
    it('returns false with an existing value', () => {
      expect(CommonUtils.isUndef(true)).toBe(false)
      expect(CommonUtils.isUndef(false)).toBe(false)
      expect(CommonUtils.isUndef('Hello')).toBe(false)
      expect(CommonUtils.isUndef('')).toBe(false)
      expect(CommonUtils.isUndef([])).toBe(false)
      expect(CommonUtils.isUndef({})).toBe(false)
    })

    it('returns true with a null or undefined value', () => {
      expect(CommonUtils.isUndef(null)).toBe(true)
      expect(CommonUtils.isUndef(undefined)).toBe(true)
    })
  })

  describe('isDef()', () => {
    it('returns true with a existing value', () => {
      expect(CommonUtils.isDef(true)).toBe(true)
      expect(CommonUtils.isDef(false)).toBe(true)
      expect(CommonUtils.isDef('Hello')).toBe(true)
      expect(CommonUtils.isDef('')).toBe(true)
      expect(CommonUtils.isDef([])).toBe(true)
      expect(CommonUtils.isDef({})).toBe(true)
    })

    it('returns false with a null or undefined value', () => {
      expect(CommonUtils.isDef(null)).toBe(false)
      expect(CommonUtils.isDef(undefined)).toBe(false)
    })
  })
})
