import ExerciseContainer from '../classes/ExerciseContainer.js'

const ExerciseService = (function() {
  function getExercises() {
    return new Promise((resolve, reject) => {
      try {
        const exercises = JSON.parse(localStorage.getItem('exercises'))
        return resolve(new ExerciseContainer().fromArray(exercises || []))
      } catch (error) {
        console.error('Error getting exercises from storage.', error)
        return reject(null)
      }
    })
  }

  function saveExercises() {
    return new Promise((resolve, reject) => {
      try {
        resolve(true)
      } catch (error) {
        reject(false)
      }
    })
  }

  return {
    getExercises,
    saveExercises,
  }
})()

export default ExerciseService
