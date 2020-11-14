<script>
import { COMPONENT } from '../constants/globals.js'
import DefaultsCard from '../components/DefaultsCard.vue'
import ResumeCard from '../components/ResumeCard.vue'

export default {
  name: COMPONENT.dashboardRecommendations,

  components: {
    DefaultsCard,
    ResumeCard,
  },
}
</script>

<template>
  <v-row>
    <DefaultsCard />
    <ResumeCard />
  </v-row>
</template>
