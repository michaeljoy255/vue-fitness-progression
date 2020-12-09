import _Descriptors from './_Descriptors.js'
import { DEFAULT_CATEGORY, DEFAULT_EQUIPMENT } from '../constants/defaults.js'

export default class Exercise extends _Descriptors {
  constructor({
    id,
    name,
    description,
    previousRecord,
    category = DEFAULT_CATEGORY.misc,
    equipment = DEFAULT_EQUIPMENT.none,
    inputs = [],
  } = {}) {
    super({ id, name, description, previousRecord })
    this.category = category
    this.equipment = equipment
    this.inputs = inputs
  }

  static isExercise(exercise) {
    return exercise instanceof Exercise
  }

  static isArrayOfExercises(exercises) {
    return (
      Array.isArray(exercises) && exercises.every((i) => Exercise.isExercise(i))
    )
  }

  getPreviousRecordCreatedAt() {
    if (this.previousRecord && this.previousRecord.createdAt) {
      return new Date(this.previousRecord.createdAt).toDateString()
    } else {
      return 'No previous record found'
    }
  }

  longName() {
    if (this.equipment && this.equipment !== DEFAULT_EQUIPMENT.none) {
      return `${this.name}, ${this.equipment}`
    }
    return this.name
  }
}
