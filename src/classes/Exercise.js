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
        previousRecord: exercise._previousRecord
          ? ExerciseRecord.exportData(exercise._previousRecord)
          : null,
        category: exercise._category,
        equipment: exercise._equipment,
        inputs: exercise._inputs.map((i) => ExerciseInput.exportData(i)),
      }
    } else {
      console.error('Error:', exercise)
    }
  }

  static importData(exercise) {
    if (!exercise) return null

    return new Exercise({
      id: exercise.id,
      name: exercise.name,
      description: exercise.description,
      previousRecord: ExerciseRecord.importData(exercise.previousRecord),
      category: exercise.category,
      equipment: exercise.equipment,
      inputs: exercise.inputs.map((i) => ExerciseInput.importData(i)),
    })
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

  getPreviousRecordCreatedAt() {
    if (this._previousRecord && this._previousRecord.createdAt) {
      return new Date(this._previousRecord.createdAt).toDateString()
    } else {
      return 'No previous record found'
    }
  }

  longName() {
    if (this._equipment && this._equipment !== DEFAULT_EQUIPMENT.none) {
      return `${this._name}, ${this._equipment}`
    }
    return this._name
  }
}
