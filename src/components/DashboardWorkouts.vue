<script>
import { COMPONENT } from '../constants/globals.js'
import DashboardWorkoutCard from '../components/DashboardWorkoutCard.vue'

export default {
  name: COMPONENT.dashboardWorkouts,

  components: {
    DashboardWorkoutCard,
  },

  computed: {
    workouts() {
      return this.$store.state.workouts.workoutContainer.toArray()
    },
  },
}
</script>

<template>
  <v-row>
    <DashboardWorkoutCard
      v-for="workout in workouts"
      :key="workout.id"
      :workout="workout"
    />
  </v-row>
</template>
