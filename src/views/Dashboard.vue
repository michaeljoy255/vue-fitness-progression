<script>
import { VIEW } from '../constants/globals'
import DashboardRecommendations from '../components/DashboardRecommendations.vue'
import DashboardWorkouts from '../components/DashboardWorkouts.vue'

export default {
  name: VIEW.dashboard,

  components: {
    DashboardRecommendations,
    DashboardWorkouts,
  },

  async created() {
    await this.$store.dispatch('activeWorkout/loadActiveWorkoutFromStorage')
    await this.$store.dispatch('activeExercises/loadActiveExercisesFromStorage')
  },

  computed: {
    renderWorkouts() {
      const workouts = this.$store.state.workouts
      return workouts.isInitialized && workouts.workoutContainer.hasData()
    },
  },
}
</script>

<template>
  <v-container>
    <DashboardRecommendations />
    <DashboardWorkouts v-if="renderWorkouts" />
  </v-container>
</template>
