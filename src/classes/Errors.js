export class ContainersMismatchError extends Error {
  constructor() {
    super('Containers must match.')
  }
}

export class ContainerItemsMistmacthError extends Error {
  constructor() {
    super('Container item instances must match.')
  }
}

/*
class ValueLimitError extends Error {
  constructor({ type = null, value = null, limit = null } = {}) {
    const message = `The value ${value} is out of bounds`
    super()
  }
}
*/
