const ExerciseService = (function() {
  function getExercises() {
    return new Promise((resolve) => {
      resolve(JSON.parse(localStorage.getItem('exercises')))
    })
  }

  function updateExercise(exercise) {
    return new Promise((resolve) => {
      resolve(exercise)
    })
  }

  function deleteExercise(exercise) {
    return new Promise((resolve) => {
      localStorage.removeItem('exercises')
      resolve(exercise)
    })
  }

  return {
    getExercises,
    updateExercise,
    deleteExercise,
  }
})()

export default ExerciseService
