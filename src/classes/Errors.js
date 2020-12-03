export class DefaultsError extends Error {}

export class InstanceError extends Error {
  constructor(instance) {
    super(`Expected ${instance} instance.`)
  }
}

export class StorageError extends Error {}

export class ValueLimitError extends Error {}
