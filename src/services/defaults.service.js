import DefaultsGenerator from '../classes/DefaultsGenerator.js'

const DefaultsService = (function() {
  const defaultsGenerator = new DefaultsGenerator()

  function getExercises() {
    return new Promise((resolve) => {
      resolve(defaultsGenerator.exercises)
    })
  }

  function getWorkouts() {
    return new Promise((resolve) => {
      resolve(defaultsGenerator.workouts)
    })
  }

  return {
    getExercises,
    getWorkouts,
  }
})()

export default DefaultsService
