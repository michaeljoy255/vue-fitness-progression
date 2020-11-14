import * as CommonUtils from '../../src/utils/common.js'

describe('Utils > common.js', () => {
  it('isUndef with defined value, returns false', () => {
    let value = true
    expect(CommonUtils.isUndef(value)).toBe(false)

    value = false
    expect(CommonUtils.isUndef(value)).toBe(false)

    value = 'Hello'
    expect(CommonUtils.isUndef(value)).toBe(false)

    value = ''
    expect(CommonUtils.isUndef(value)).toBe(false)

    value = []
    expect(CommonUtils.isUndef(value)).toBe(false)

    value = {}
    expect(CommonUtils.isUndef(value)).toBe(false)
  })

  it('isUndef with undefined value, returns true', () => {
    let value = null
    expect(CommonUtils.isUndef(value)).toBe(true)

    value = undefined
    expect(CommonUtils.isUndef(value)).toBe(true)
  })

  it('isDef with defined value, returns true', () => {
    let value = true
    expect(CommonUtils.isDef(value)).toBe(true)

    value = false
    expect(CommonUtils.isDef(value)).toBe(true)

    value = 'Hello'
    expect(CommonUtils.isDef(value)).toBe(true)

    value = ''
    expect(CommonUtils.isDef(value)).toBe(true)

    value = []
    expect(CommonUtils.isDef(value)).toBe(true)

    value = {}
    expect(CommonUtils.isDef(value)).toBe(true)
  })

  it('isDef with undefined value, returns false', () => {
    let value = null
    expect(CommonUtils.isDef(value)).toBe(false)

    value = undefined
    expect(CommonUtils.isDef(value)).toBe(false)
  })
})
