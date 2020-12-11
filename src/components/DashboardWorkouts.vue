<script>
import DashboardWorkoutCard from '../components/DashboardWorkoutCard.vue'

export default {
  components: {
    DashboardWorkoutCard,
  },

  computed: {
    workouts() {
      return this.$store.state.workouts.workouts
    },
  },
}
</script>

<template>
  <v-row>
    <DashboardWorkoutCard
      v-for="workout in workouts"
      :key="workout.id"
      :workout="workout"
    />
  </v-row>
</template>
