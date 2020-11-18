import Exercise from '../classes/Exercise.js'
import ExerciseContainer from '../classes/ExerciseContainer.js'
import Workout from '../classes/Workout.js'
import WorkoutContainer from '../classes/WorkoutContainer.js'
import ExerciseInput from '../classes/ExerciseInput.js'
import { DEFAULT_EXERCISE, DEFAULT_EQUIPMENT } from '../constants/defaults.js'

/**
 * Singleton for generating defaults for the app if needed.
 */
const Defaults = (() => {
  let exercises, workouts

  function initDefaults() {
    console.log('Initializing defaults...')
    initExercises()
    initWorkouts()
  }

  function initExercises() {
    const exercisesArray = Object.values(DEFAULT_EXERCISE).map((exercise) =>
      addExercise(exercise)
    )

    exercises = new ExerciseContainer({ items: exercisesArray })
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
    const workoutsArray = [
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

    workouts = new WorkoutContainer({ items: workoutsArray })
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
      getExerciseByNameAndEquipment(
        'Bent Over Rows',
        DEFAULT_EQUIPMENT.barbell
      ),
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
      getExerciseByNameAndEquipment(
        'Leg Curls',
        DEFAULT_EQUIPMENT.weightMachine
      ),
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
      getExerciseByNameAndEquipment(
        'Russian Twist',
        DEFAULT_EQUIPMENT.dumbbell
      ),
      getExerciseByNameAndEquipment(
        'Alternating Torso Twist',
        DEFAULT_EQUIPMENT.cableMachine
      ),
      getExerciseByNameAndEquipment(
        'Oblique Side Bends',
        DEFAULT_EQUIPMENT.dumbbell
      ),
      getExerciseByNameAndEquipment(
        "Farmer's Walk",
        DEFAULT_EQUIPMENT.dumbbell
      ),
      getExerciseByNameAndEquipment('Cool-down', DEFAULT_EQUIPMENT.none),
      getExerciseByNameAndEquipment('Stretching', DEFAULT_EQUIPMENT.none),
    ]
  }

  function getExerciseByNameAndEquipment(name, equipment) {
    return exercises.items.find(
      (item) => item.name === name && item.equipment === equipment
    )
  }

  return {
    getExercises: () => {
      if (!exercises) initDefaults()
      return exercises
    },
    getWorkouts: () => {
      if (!workouts) initDefaults()
      return workouts
    },
  }
})()

export default Defaults
