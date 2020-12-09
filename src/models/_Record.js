import _Id from './_Id.js'

export default class _Record extends _Id {
  constructor({ id = null, createdAt = null, note = null } = {}) {
    super({ id })
    !createdAt ? this._initCreatedAt() : (this.createdAt = createdAt)
    this.note = note
  }

  _initCreatedAt() {
    this.createdAt = new Date()
  }
}
