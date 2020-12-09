import _Id from './_Id.js'

export default class _Descriptors extends _Id {
  constructor({ id, name = '', description = '', previousRecord = null } = {}) {
    super({ id })
    this.name = name
    this.description = description
    this.previousRecord = previousRecord
  }
}
