import _Activity from './_Activity.js'
import ExerciseInputs from './ExerciseInputs.js'
import { CATEGORY } from '../constants/globals.js'

export default class Exercise extends _Activity {
  constructor({
    id,
    name,
    description,
    previousRecordId,
    category = CATEGORY.misc,
    equipment = null,
    inputs = new ExerciseInputs(),
  } = {}) {
    super({ id, name, description, previousRecordId })
    this.category = category
    this.equipment = equipment
    this.inputs = inputs
  }
}
