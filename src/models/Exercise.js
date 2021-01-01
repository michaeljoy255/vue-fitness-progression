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
}
