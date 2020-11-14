const WorkoutService = (function() {
  function getWorkouts() {
    return new Promise((resolve) => {
      resolve(JSON.parse(localStorage.getItem('workouts')))
    })
  }

  function updateWorkout(workout) {
    return new Promise((resolve) => {
      resolve(workout)
    })
  }

  function deleteWorkout(workout) {
    return new Promise((resolve) => {
      localStorage.removeItem('workouts')
      resolve(workout)
    })
  }

  return {
    getWorkouts,
    updateWorkout,
    deleteWorkout,
  }
})()

export default WorkoutService
