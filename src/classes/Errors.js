class ContainerMismatchError extends Error {
  constructor({ type = null } = {}) {
    super(`${type}Container can only store instances of the ${type} class.`)
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
