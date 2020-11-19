import { v4 as uuid } from 'uuid'

/**
 *
 */
export default class _Id {
  constructor({ id = null } = {}) {
    !id ? (this._id = uuid()) : (this._id = id)
  }

  get id() {
    return this._id
  }
}
