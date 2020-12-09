import Exercise from '../../models/Exercise.js'
import Workout from '../../models/Workout.js'
import ExerciseInput from '../../models/ExerciseInput.js'
import {
  DEFAULT_EXERCISE,
  DEFAULT_EQUIPMENT,
} from '../../constants/defaults.js'

let exercises
let workouts

export function getDefaultExercises() {
  if (!Exercise.isArrayOfExercises(exercises)) initExercises()
  return exercises
}

export function getDefaultWorkouts() {
  if (!Workout.isArrayOfWorkouts(workouts)) initWorkouts()
  return workouts
}

function initExercises() {
  exercises = Object.values(DEFAULT_EXERCISE).map((exercise) => {
    return addExercise(exercise)
  })
}

function addExercise(exercise) {
  const { name, description, category, equipment, inputs } = exercise

  return new Exercise({
    name,
    description,
    category,
    equipment,
    inputs: addExerciseInputs(inputs),
  })
}

function addExerciseInputs(inputs) {
  return inputs.map(
    (input) =>
      new ExerciseInput({
        inputType: input.inputType,
        hint: input.hint,
      })
  )
}

function initWorkouts() {
  if (!Exercise.isArrayOfExercises(exercises)) initExercises()

  workouts = [
    new Workout({
      name: 'Chest #1',
      description: 'Chest focused workout version #1.',
      exercises: addChest1(),
    }),
    new Workout({
      name: 'Back #1',
      description: 'Back focused workout version #1.',
      exercises: addBack1(),
    }),
    new Workout({
      name: 'Legs #1',
      description: 'Legs focused workout version #1.',
      exercises: addLegs1(),
    }),
    new Workout({
      name: 'Arms and Shoulders #1',
      description: 'Arms and Shoulders focused workout version #1.',
      exercises: addArmsAndShoulders1(),
    }),
    new Workout({
      name: 'Core #1',
      description: 'Core focused workout version #1.',
      exercises: addCore1(),
    }),
  ]
}

function addChest1() {
  return [
    getExerciseByNameAndEquipment('Warm-up', DEFAULT_EQUIPMENT.none),
    getExerciseByNameAndEquipment('Bench Press', DEFAULT_EQUIPMENT.barbell),
    getExerciseByNameAndEquipment(
      'Incline Bench Press',
      DEFAULT_EQUIPMENT.barbell
    ),
    getExerciseByNameAndEquipment(
      'Decline Bench Press',
      DEFAULT_EQUIPMENT.barbell
    ),
    getExerciseByNameAndEquipment('Cool-down', DEFAULT_EQUIPMENT.none),
    getExerciseByNameAndEquipment('Stretching', DEFAULT_EQUIPMENT.none),
  ]
}

function addBack1() {
  return [
    getExerciseByNameAndEquipment('Warm-up', DEFAULT_EQUIPMENT.none),
    getExerciseByNameAndEquipment('Bent Over Rows', DEFAULT_EQUIPMENT.barbell),
    getExerciseByNameAndEquipment(
      'Stiff Leg Deadlift',
      DEFAULT_EQUIPMENT.barbell
    ),
    getExerciseByNameAndEquipment(
      'Bent Over Back Flyes',
      DEFAULT_EQUIPMENT.dumbbell
    ),
    getExerciseByNameAndEquipment('Cool-down', DEFAULT_EQUIPMENT.none),
    getExerciseByNameAndEquipment('Stretching', DEFAULT_EQUIPMENT.none),
  ]
}

function addLegs1() {
  return [
    getExerciseByNameAndEquipment('Warm-up', DEFAULT_EQUIPMENT.none),
    getExerciseByNameAndEquipment('Leg Curls', DEFAULT_EQUIPMENT.weightMachine),
    getExerciseByNameAndEquipment(
      'Leg Extensions',
      DEFAULT_EQUIPMENT.weightMachine
    ),
    getExerciseByNameAndEquipment('Squats', DEFAULT_EQUIPMENT.barbell),
    getExerciseByNameAndEquipment('Cool-down', DEFAULT_EQUIPMENT.none),
    getExerciseByNameAndEquipment('Stretching', DEFAULT_EQUIPMENT.none),
  ]
}

function addArmsAndShoulders1() {
  return [
    getExerciseByNameAndEquipment('Warm-up', DEFAULT_EQUIPMENT.none),
    getExerciseByNameAndEquipment(
      'Underhand Bicep Curls',
      DEFAULT_EQUIPMENT.dumbbell
    ),
    getExerciseByNameAndEquipment(
      'Tricep Pulldowns',
      DEFAULT_EQUIPMENT.cableMachine
    ),
    getExerciseByNameAndEquipment(
      'Front Arm Raises',
      DEFAULT_EQUIPMENT.dumbbell
    ),
    getExerciseByNameAndEquipment(
      'Side Arm Raises',
      DEFAULT_EQUIPMENT.dumbbell
    ),
    getExerciseByNameAndEquipment(
      'Diagonal Arm Raises',
      DEFAULT_EQUIPMENT.dumbbell
    ),
    getExerciseByNameAndEquipment('Shrugs', DEFAULT_EQUIPMENT.barbell),
    getExerciseByNameAndEquipment('Cool-down', DEFAULT_EQUIPMENT.none),
    getExerciseByNameAndEquipment('Stretching', DEFAULT_EQUIPMENT.none),
  ]
}

function addCore1() {
  return [
    getExerciseByNameAndEquipment('Warm-up', DEFAULT_EQUIPMENT.none),
    getExerciseByNameAndEquipment(
      'Abdominal Crunch',
      DEFAULT_EQUIPMENT.cableMachine
    ),
    getExerciseByNameAndEquipment('Russian Twist', DEFAULT_EQUIPMENT.dumbbell),
    getExerciseByNameAndEquipment(
      'Alternating Torso Twist',
      DEFAULT_EQUIPMENT.cableMachine
    ),
    getExerciseByNameAndEquipment(
      'Oblique Side Bends',
      DEFAULT_EQUIPMENT.dumbbell
    ),
    getExerciseByNameAndEquipment("Farmer's Walk", DEFAULT_EQUIPMENT.dumbbell),
    getExerciseByNameAndEquipment('Cool-down', DEFAULT_EQUIPMENT.none),
    getExerciseByNameAndEquipment('Stretching', DEFAULT_EQUIPMENT.none),
  ]
}

function getExerciseByNameAndEquipment(name, equipment) {
  return exercises.find(
    (item) => item.name === name && item.equipment === equipment
  )
}
