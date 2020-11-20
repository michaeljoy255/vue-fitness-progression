class ContainerMismatchError extends Error {
  constructor(type) {
    const message = `${type}Container requires the use of ${type} instances.`
    super(message)
  }
}

export class ExerciseContainerMismatchError extends ContainerMismatchError {
  constructor() {
    super('Exercise')
  }
}

export class WorkoutContainerMismatchError extends ContainerMismatchError {
  constructor() {
    super('Workout')
  }
}

export class ExerciseRecordContainerMismatchError extends ContainerMismatchError {
  constructor() {
    super('ExerciseRecord')
  }
}

export class WorkoutRecordContainerMismatchError extends ContainerMismatchError {
  constructor() {
    super('WorkoutRecord')
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
