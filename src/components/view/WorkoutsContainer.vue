<script>
import WorkoutCard from './WorkoutCard.vue'

export default {
  components: {
    WorkoutCard,
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
    <WorkoutCard
      v-for="workout in workouts"
      :key="workout.id"
      :workout="workout"
    />
  </v-row>
</template>
