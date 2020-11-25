import ExerciseContainer from '../classes/ExerciseContainer.js'
import ExerciseRecordContainer from '../classes/ExerciseRecordContainer.js'

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

  function saveActiveExercises(activeExercises) {
    return new Promise((resolve, reject) => {
      try {
        const exportedActiveExercises = ExerciseRecordContainer.exportData(
          activeExercises
        )
        const jsonActiveExercises = JSON.stringify(exportedActiveExercises)
        localStorage.setItem('activeExercises', jsonActiveExercises)
        resolve()
      } catch (error) {
        reject(
          new Error('Error saving active exercise records to storage.', error)
        )
      }
    })
  }

  return {
    getExercises,
    saveExercises,
    saveActiveExercises,
  }
})()

export default ExerciseService
