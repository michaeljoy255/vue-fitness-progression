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

  // sort() {
  //   this._items.sort()
  // }
}
