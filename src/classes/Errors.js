class ContainerMismatchError extends Error {
  constructor({ type = null, data = null } = {}) {
    super(
      `${type}Container can only store instances of the ${type} class. Recieved (JSON stringified): ${JSON.stringify(
        data
      )}`
    )
  }
}

export class ExerciseContainerMismatchError extends ContainerMismatchError {
  constructor(data) {
    super({ type: 'Exercise', data })
  }
}

export class WorkoutContainerMismatchError extends ContainerMismatchError {
  constructor(data) {
    super({ type: 'Workout', data })
  }
}

export class ExerciseRecordContainerMismatchError extends ContainerMismatchError {
  constructor(data) {
    super({ type: 'ExerciseRecord', data })
  }
}

export class WorkoutRecordContainerMismatchError extends ContainerMismatchError {
  constructor(data) {
    super({ type: 'WorkoutRecord', data })
  }
}
