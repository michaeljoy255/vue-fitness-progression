export class ContainerMismatchError extends Error {
  constructor() {
    super('Container can only store instances of the correct class.')
  }
}
