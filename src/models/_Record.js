import _Id from './_Id.js'

export default class _Record extends _Id {
  constructor({ id, createdAt = new Date(), note = '' } = {}) {
    super({ id })
    this.createdAt = createdAt
    this.note = note
  }
}
