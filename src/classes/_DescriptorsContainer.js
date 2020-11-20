import _IdContainer from './_IdContainer.js'

/**
 *
 */
export default class _DescriptorsContainer extends _IdContainer {
  findByName(name) {
    return this._items.filter((item) => item.name === name)
  }
}
