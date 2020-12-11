import _Descriptors from './_Descriptors.js'
import { CATEGORY, EQUIPMENT } from '../constants/globals.js'

export default class Exercise extends _Descriptors {
  constructor({
    id,
    name,
    description,
    previousRecord,
    category = CATEGORY.misc,
    equipment = EQUIPMENT.none,
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

  static isExerciseArray(items) {
    return Array.isArray(items) && items.every((i) => Exercise.isExercise(i))
  }

  static isExerciseArrayWithData(items) {
    return Exercise.isExerciseArray(items) && items.length > 0
  }

  static findByCategory(items, category) {
    return items.find((i) => i.category === category)
  }

  static findByEquipment(items, equipment) {
    return items.find((i) => i.equipment === equipment)
  }

  getPreviousRecordCreatedAt() {
    if (this.previousRecord && this.previousRecord.createdAt) {
      return new Date(this.previousRecord.createdAt).toDateString()
    } else {
      return 'No previous record found'
    }
  }

  longName() {
    if (this.equipment && this.equipment !== EQUIPMENT.none) {
      return `${this.name}, ${this.equipment}`
    }
    return this.name
  }
}
