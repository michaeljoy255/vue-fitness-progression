import _Descriptors from './_Descriptors.js'
import ExerciseRecord from './ExerciseRecord.js'
import ExerciseInput from './ExerciseInput.js'
import { DEFAULT_CATEGORY, DEFAULT_EQUIPMENT } from '../constants/defaults.js'

/**
 *
 */
export default class Exercise extends _Descriptors {
  constructor({
    id = null,
    name = null,
    description = null,
    previousRecord = null,
    category = DEFAULT_CATEGORY.misc,
    equipment = DEFAULT_EQUIPMENT.none,
    inputs = [],
  } = {}) {
    super({ id, name, description, previousRecord })
    this._category = category
    this._equipment = equipment
    this._inputs = inputs
  }

  static isExercise(exercise) {
    return exercise instanceof Exercise
  }

  static isArrayOfExercises(exercises) {
    return (
      Array.isArray(exercises) && exercises.every((i) => Exercise.isExercise(i))
    )
  }

  static exportData(exercise) {
    if (Exercise.isExercise(exercise)) {
      return {
        id: exercise._id,
        name: exercise._name,
        description: exercise._description,
        previousRecord: ExerciseRecord.exportData(exercise._previousRecord),
        category: exercise._category,
        equipment: exercise._equipment,
        inputs: exercise._inputs.map((i) => ExerciseInput.exportData(i)),
      }
    } else {
      console.error('Error:', exercise)
    }
  }

  get category() {
    return this._category
  }

  get equipment() {
    return this._equipment
  }

  get inputs() {
    return this._inputs
  }

  set category(category) {
    this._category = category
  }

  set equipment(equipment) {
    this._equipment = equipment
  }

  set inputs(inputs) {
    this._inputs = inputs
  }

  longName() {
    if (this._equipment && this._equipment !== DEFAULT_EQUIPMENT.none) {
      return `${this._name}, ${this._equipment}`
    }
    return this._name
  }

  exportData() {
    return {
      id: this._id,
      name: this._name,
      description: this._description,
      previousRecord: this._previousRecord && this._previousRecord.exportData(),
      category: this._category,
      equipment: this._equipment,
      inputs: this._inputs && this._inputs.map((i) => i.exportData()),
    }
  }
}
