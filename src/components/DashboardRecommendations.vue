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
      return !this.$store.getters['workouts/isReady']
    },

    renderResumeCard() {
      return this.$store.getters['activeWorkout/isReady']
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
