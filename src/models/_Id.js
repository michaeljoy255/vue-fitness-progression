import { v4 as uuid } from 'uuid'

/**
 *
 */
export default class _Id {
  constructor({ id = null } = {}) {
    if (!id) {
      this._id = uuid()
    } else {
      this._id = id
    }
  }

  get id() {
    return this._id
  }
}
