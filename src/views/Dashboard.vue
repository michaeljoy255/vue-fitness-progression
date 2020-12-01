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
    await this.$store.dispatch('activeWorkout/load')
    await this.$store.dispatch('activeExercises/load')
  },

  computed: {
    renderWorkouts() {
      return this.$store.getters['workouts/isReady']
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
