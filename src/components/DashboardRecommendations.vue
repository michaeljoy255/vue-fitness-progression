<script>
import { COMPONENT } from '../constants/globals.js'
import DashboardDefaultsCard from '../components/DashboardDefaultsCard.vue'
import DashboardResumeCard from '../components/DashboardResumeCard.vue'
import DashboardTestCard from '../components/DashboardTestCard.vue'

export default {
  name: COMPONENT.dashboardRecommendations,

  components: {
    DashboardDefaultsCard,
    DashboardResumeCard,
    DashboardTestCard,
  },

  computed: {
    renderDefaultsCard() {
      const workouts = this.$store.state.workouts
      return workouts.isInitialized && workouts.workoutContainer.hasData()
    },

    renderResumeCard() {
      const activeWorkout = this.$store.state.activeWorkout
      return activeWorkout.isInitialized && activeWorkout.activeWorkoutRecord
    },
  },
}
</script>

<template>
  <v-row>
    <DashboardTestCard />
    <DashboardDefaultsCard v-if="renderDefaultsCard" />
    <DashboardResumeCard v-if="renderResumeCard" />
  </v-row>
</template>
