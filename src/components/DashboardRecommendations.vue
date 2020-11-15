<script>
import { COMPONENT } from '../constants/globals.js'
import DashboardDefaultsCard from '../components/DashboardDefaultsCard.vue'
import DashboardResumeCard from '../components/DashboardResumeCard.vue'

export default {
  name: COMPONENT.dashboardRecommendations,

  components: {
    DashboardDefaultsCard,
    DashboardResumeCard,
  },
}
</script>

<template>
  <v-row>
    <DashboardDefaultsCard />
    <DashboardResumeCard />
  </v-row>
</template>
