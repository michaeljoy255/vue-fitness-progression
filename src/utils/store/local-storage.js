import Exercise from '../../models/Exercise.js'
import ExerciseRecord from '../../models/ExerciseRecord.js'
import Workout from '../../models/Workout.js'
import WorkoutRecord from '../../models/WorkoutRecord.js'

function setLocalStorage(item, data) {
  const json = JSON.stringify(data)
  localStorage.setItem(item, json)
}

function getLocalStorage(item) {
  return JSON.parse(localStorage.getItem(item))
}

export function saveExercisesToLocalStorage(exercises) {
  setLocalStorage('exercises', exercises)
}

export function fetchExercisesFromLocalStorage() {
  const data = getLocalStorage('exercises')
  if (data) return data.map((i) => new Exercise(i))
  return []
}

export function deleteExercisesFromLocalStorage() {
  localStorage.removeItem('exercises')
}

export function saveWorkoutsToLocalStorage(workouts) {
  setLocalStorage('workouts', workouts)
}

export function fetchWorkoutsFromLocalStorage() {
  const data = getLocalStorage('workouts')
  if (data) return data.map((i) => new Workout(i))
  return []
}

export function deleteWorkoutsFromLocalStorage() {
  localStorage.removeItem('workouts')
}

export function saveActiveWorkoutToLocalStorage(activeWorkout) {
  setLocalStorage('activeWorkout', activeWorkout)
}

export function fetchActiveWorkoutFromLocalStorage() {
  const data = getLocalStorage('activeWorkout')
  if (data) return new WorkoutRecord(data)
  return null
}

export function deleteActiveWorkoutFromLocalStorage() {
  localStorage.removeItem('activeWorkout')
}

export function saveActiveExercisesToLocalStorage(activeExercises) {
  setLocalStorage('activeExercises', activeExercises)
}

export function fetchActiveExercisesFromLocalStorage() {
  const data = getLocalStorage('activeExercises')
  if (data) return data.map((i) => new ExerciseRecord(i))
  return null
}

export function deleteActiveExercisesFromLocalStorage() {
  localStorage.removeItem('activeExercises')
}
