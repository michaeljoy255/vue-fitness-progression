import _Id from './_Id.js'

export default class _Descriptors extends _Id {
  constructor({ id, name = '', description = '', previousRecord = null } = {}) {
    super({ id })
    this.name = name
    this.description = description
    this.previousRecord = previousRecord
  }

  static findByName(items, name) {
    return items.find((i) => i.name === name)
  }

  static filterByDescriptionKeyword(items, keyword) {
    return items.filter((i) =>
      i.description.toLowerCase().includes(keyword.toLowerCase())
    )
  }
}
