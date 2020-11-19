class ContainerMismatchError extends Error {
  constructor({ type = null } = {}) {
    const message = `${type}Container can only store instances of the ${type} class.`
    super(message)
  }
}

export class ExerciseContainerMismatchError extends ContainerMismatchError {
  constructor() {
    super({ type: 'Exercise' })
  }
}

export class WorkoutContainerMismatchError extends ContainerMismatchError {
  constructor() {
    super({ type: 'Workout' })
  }
}

export class ExerciseRecordContainerMismatchError extends ContainerMismatchError {
  constructor() {
    super({ type: 'ExerciseRecord' })
  }
}

export class WorkoutRecordContainerMismatchError extends ContainerMismatchError {
  constructor() {
    super({ type: 'WorkoutRecord' })
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
