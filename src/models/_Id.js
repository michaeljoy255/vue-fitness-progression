import { v4 as uuid } from 'uuid'

export default class _Id {
  constructor({ id = uuid() } = {}) {
    this.id = id
  }

  static findById(items, id) {
    return items.find((i) => i.id === id)
  }
}
