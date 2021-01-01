export const entityGetters = (entity) => {
  return {
    getState(state) {
      return state[entity]
    },
    isReady(state) {
      return !!(
        state[entity] !== null &&
        state[entity] !== undefined &&
        state[entity] !== []
      )
    },
    findById: (state) => (id) => {
      if (!state[entity]) return null
      return state[entity].find((i) => i.id === id)
    },
  }
}

export const activityGetters = (entity) => {
  return {
    findByName: (state) => (name) => {
      return state[entity].find((i) => i.name === name)
    },
  }
}

export const historyRecordGetters = (entity) => {
  return {
    findNewest(state) {
      return state[entity] // WIP
    },
  }
}
