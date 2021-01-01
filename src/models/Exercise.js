import _Activity from './_Activity.js'
import { CATEGORY, EQUIPMENT } from '../constants/globals.js'

export default class Exercise extends _Activity {
  constructor({
    id,
    name,
    description,
    previousRecordId,
    category = CATEGORY.misc,
    equipment = EQUIPMENT.none,
    inputs = [],
  } = {}) {
    super({ id, name, description, previousRecordId })
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
}
