export const entityGetters = (entity) => {
  return {
    getState: (state) => state[entity],
    isReady: (state) =>
      !!(
        state[entity] !== null &&
        state[entity] !== undefined &&
        state[entity] !== []
      ),
    findById: (state) => (id) => {
      if (!state[entity]) return null
      return state[entity].find((i) => i.id === id)
    },
  }
}

export const activityGetters = (entity) => {
  return {
    findByName: (state) => (name) => state[entity].find((i) => i.name === name),
    filterByDescriptionKeyword: (state) => (keyword) =>
      state[entity].filter((i) =>
        i.description.toLowerCase().includes(keyword.toLowerCase())
      ),
  }
}

export const recordGetters = (entity) => {
  return {
    // @todo - WIP
    findNewest: (state) => state[entity],
    // @todo - WIP
    findByOldest: (state) => state[entity],
    // @todo - WIP
    filterByDay: (state) => state[entity],
    // @todo - WIP
    filterByMonth: (state) => state[entity],
    // @todo - WIP
    filterByYear: (state) => state[entity],
    // @todo - WIP
    filterBetweenDates: (state) => (date1, date2) => {
      console.log(date1, date2)
      return state[entity]
    },
    filterByNoteKeyword: (state) => (keyword) =>
      state[entity].filter((i) =>
        i.note.toLowerCase().includes(keyword.toLowerCase())
      ),
  }
}

export const historyExerciseGetters = (entity) => {
  return {
    findByExerciseId: (state) => (id) =>
      state[entity].find((i) => i.exerciseId === id),
  }
}

export const historyWorkoutGetters = (entity) => {
  return {
    findByWorkoutId: (state) => (id) =>
      state[entity].find((i) => i.workoutId === id),
  }
}
