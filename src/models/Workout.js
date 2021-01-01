import _Activity from './_Activity.js'

export default class Workout extends _Activity {
  constructor({
    id,
    name,
    description,
    previousRecordId,
    exerciseIds = [],
  } = {}) {
    super({ id, name, description, previousRecordId })
    this.exerciseIds = exerciseIds
  }
}
