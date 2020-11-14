<script>
import { COMPONENT } from '../constants/globals.js'
import WorkoutCard from '../components/WorkoutCard.vue'

export default {
  name: COMPONENT.dashboardWorkouts,

  components: {
    WorkoutCard,
  },
}
</script>

<template>
  <v-row>
    <WorkoutCard />
    <WorkoutCard />
    <WorkoutCard />
    <WorkoutCard />
    <WorkoutCard />
    <WorkoutCard />
    <WorkoutCard />
    <WorkoutCard />
    <WorkoutCard />
    <WorkoutCard />
    <WorkoutCard />
    <WorkoutCard />
  </v-row>
</template>
