import WorkoutContainer from '../classes/WorkoutContainer.js'
import WorkoutRecord from '../classes/WorkoutRecord.js'

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

  function saveActiveWorkout(activeWorkout) {
    return new Promise((resolve, reject) => {
      try {
        const exportedActiveWorkout = WorkoutRecord.exportData(activeWorkout)
        const jsonActiveWorkout = JSON.stringify(exportedActiveWorkout)
        localStorage.setItem('activeWorkout', jsonActiveWorkout)
        resolve()
      } catch (error) {
        reject(
          new Error('Error saving active workout record to storage.', error)
        )
      }
    })
  }

  return {
    getWorkouts,
    saveWorkouts,
    saveActiveWorkout,
  }
})()

export default WorkoutService
