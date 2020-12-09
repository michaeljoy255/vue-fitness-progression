import { v4 as uuid } from 'uuid'

export default class _Id {
  constructor({ id = null } = {}) {
    if (!id) {
      this.id = uuid()
    } else {
      this.id = id
    }
  }
}
