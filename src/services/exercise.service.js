import ExerciseContainer from '../classes/ExerciseContainer.js'

const ExerciseService = (function() {
  function getExercises() {
    return new Promise((resolve, reject) => {
      try {
        const parsedExercises = JSON.parse(localStorage.getItem('exercises'))
        const exercises = ExerciseContainer.importData(parsedExercises)
        return resolve(exercises)
      } catch (error) {
        return reject(new Error('Error getting exercises from storage.', error))
      }
    })
  }

  function saveExercises(exercises) {
    return new Promise((resolve, reject) => {
      try {
        const exportedExercises = ExerciseContainer.exportData(exercises)
        const jsonExercises = JSON.stringify(exportedExercises)
        localStorage.setItem('exercises', jsonExercises)
        resolve()
      } catch (error) {
        reject(new Error('Error saving exercises to storage.', error))
      }
    })
  }

  return {
    getExercises,
    saveExercises,
  }
})()

export default ExerciseService
