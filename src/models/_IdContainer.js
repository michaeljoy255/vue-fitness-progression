/**
 *
 */
export default class _IdContainer {
  constructor() {
    this._items = []
  }

  toArray() {
    return this._items
  }

  findById(id) {
    return this._items.find((item) => item.id === id)
  }

  hasData() {
    return this._items.length > 0
  }

  // sort() {
  //   this._items.sort()
  // }
}
