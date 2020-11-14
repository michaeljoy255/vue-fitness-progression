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
}
</script>

<template>
  <v-container>
    <DashboardRecommendations />
    <DashboardWorkouts />
  </v-container>
</template>
