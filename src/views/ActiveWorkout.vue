<script>
import { VIEW } from '../constants/globals'

export default {
  name: VIEW.activeWorkout,

  created() {
    const workoutId = this.$route.params.id
    const thisWorkout = this.$store.getters[
      'workouts/getWorkoutsContainer'
    ].findById(workoutId)
    console.log(thisWorkout)
    // create active workout record
    // create active exercise records
  },
}
</script>

<template>
  <div>Active Workout View {{ $route.params.id }}</div>
</template>
