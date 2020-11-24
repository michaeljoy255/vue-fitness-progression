<script>
import { COMPONENT } from '../constants/globals.js'
import DashboardDefaultsCard from '../components/DashboardDefaultsCard.vue'
import DashboardResumeCard from '../components/DashboardResumeCard.vue'
// import DashboardTestCard from '../components/DashboardTestCard.vue'

export default {
  name: COMPONENT.dashboardRecommendations,

  components: {
    DashboardDefaultsCard,
    DashboardResumeCard,
    // DashboardTestCard,
  },
}
</script>

<template>
  <v-row>
    <!-- <DashboardTestCard /> -->
    <DashboardDefaultsCard v-if="!$store.state.workouts.workouts" />
    <DashboardResumeCard v-if="!$store.state.workouts.workouts" />
  </v-row>
</template>
