import { ENTITY } from '../../constants/globals.js'

export const combinedStoreGetters = () => {
  return {
    getActiveExercises: (state, getters) => {
      const activeWorkoutRecord =
        getters[`${ENTITY.activeWorkoutRecords}/getState`][0]
      const workout = getters['workouts/findById'](
        activeWorkoutRecord.workoutId
      )
      const exercises = getters['exercises/filterByIds'](workout.exerciseIds)
      return exercises
    },
    getActiveWorkout: (state, getters) => {
      const activeWorkoutRecord =
        getters[`${ENTITY.activeWorkoutRecords}/getState`][0]
      const workout = getters[`${ENTITY.workouts}/findById`](
        activeWorkoutRecord.workoutId
      )
      return workout
    },
    getActiveWorkoutRecord: (state, getters) => {
      return getters[`${ENTITY.activeWorkoutRecords}/getState`][0]
    },
  }
}

export const entityGetters = (entity) => {
  return {
    getState: (state) => state[entity],
    isReady: (state) => {
      return !!(
        state[entity] !== null &&
        state[entity] !== undefined &&
        state[entity] !== []
      )
    },
    findById: (state) => (id) => {
      return state[entity].find((i) => i.id === id)
    },
  }
}

export const activityGetters = (entity) => {
  return {
    findByName: (state) => (name) => {
      return state[entity].find((i) => i.name === name)
    },
    filterByDescriptionKeyword: (state) => (keyword) => {
      return state[entity].filter((i) => {
        return i.description.toLowerCase().includes(keyword.toLowerCase())
      })
    },
    filterByIds: (state) => (ids) => {
      return ids.map((id) => {
        return state[entity].find((i) => i.id === id)
      })
    },
  }
}

export const exerciseGetters = (entity) => {
  return {
    filterByCategory: (state) => (category) => {
      return state[entity].filter((i) => i.category === category)
    },

    filterByEquipment: (state) => (equipment) => {
      return state[entity].filter((i) => i.equipment === equipment)
    },
    // @todo - WIP
    getInputTypeUnit() {
      switch (this.input) {
        case 'Sets':
          // do correct icon and unit
          return null
        default:
          return null
      }
    },
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
    filterByNoteKeyword: (state) => (keyword) => {
      return state[entity].filter((i) => {
        return i.note.toLowerCase().includes(keyword.toLowerCase())
      })
    },
  }
}

export const exerciseRecordGetters = (entity) => {
  return {
    findByExerciseId: (state) => (id) => {
      return state[entity].find((i) => i.exerciseId === id)
    },
  }
}

export const workoutRecordGetters = (entity) => {
  return {
    findByWorkoutId: (state) => (id) => {
      return state[entity].find((i) => i.workoutId === id)
    },
  }
}
