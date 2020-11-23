import WorkoutContainer from '../classes/WorkoutContainer.js'

const WorkoutService = (function() {
  function getWorkouts() {
    return new Promise((resolve, reject) => {
      try {
        const parsedWorkouts = JSON.parse(localStorage.getItem('workouts'))
        const workouts = WorkoutContainer.importData(parsedWorkouts)
        return resolve(workouts)
      } catch (error) {
        return reject(new Error('Error getting workouts from storage.', error))
      }
    })
  }

  function saveWorkouts(workouts) {
    return new Promise((resolve, reject) => {
      try {
        const exportedWorkouts = WorkoutContainer.exportData(workouts)
        const jsonWorkouts = JSON.stringify(exportedWorkouts)
        localStorage.setItem('workouts', jsonWorkouts)
        resolve()
      } catch (error) {
        reject(new Error('Error saving workouts to storage.', error))
      }
    })
  }

  return {
    getWorkouts,
    saveWorkouts,
  }
})()

export default WorkoutService
