import WorkoutContainer from '../classes/WorkoutContainer.js'

const WorkoutService = (function() {
  function getWorkouts() {
    return new Promise((resolve, reject) => {
      try {
        const workouts = JSON.parse(localStorage.getItem('workouts'))
        return resolve(new WorkoutContainer().fromArray(workouts))
      } catch (error) {
        console.error('Error getting workouts from storage.', error)
        return reject(null)
      }
    })
  }

  function saveWorkouts() {
    return new Promise((resolve, reject) => {
      try {
        resolve(true)
      } catch (error) {
        reject(false)
      }
    })
  }

  return {
    getWorkouts,
    saveWorkouts,
  }
})()

export default WorkoutService
