<script>
import { COMPONENT } from '../constants/globals.js'
import DashboardWorkoutCard from '../components/DashboardWorkoutCard.vue'

export default {
  name: COMPONENT.dashboardWorkouts,

  components: {
    DashboardWorkoutCard,
  },
}
</script>

<template>
  <v-row>
    <DashboardWorkoutCard />
    <DashboardWorkoutCard />
    <DashboardWorkoutCard />
    <DashboardWorkoutCard />
    <DashboardWorkoutCard />
    <DashboardWorkoutCard />
    <DashboardWorkoutCard />
    <DashboardWorkoutCard />
    <DashboardWorkoutCard />
    <DashboardWorkoutCard />
    <DashboardWorkoutCard />
    <DashboardWorkoutCard />
  </v-row>
</template>
