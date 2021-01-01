<script>
import { VIEW } from '../constants/globals'
import ActiveExercise from '../components/view/ActiveExercise.vue'

export default {
  name: VIEW.activeWorkout,

  components: {
    ActiveExercise,
  },

  computed: {
    exercises() {
      const workoutId = this.$store.getters['activeWorkoutRecords/getState'][0]
        .workoutId
      const exerciseIds = this.$store.getters['workouts/findById'](workoutId)
        .exerciseIds
      const exercises = this.$store.getters['exercises/filterByIds'](
        exerciseIds
      )
      return exercises
    },
  },

  methods: {
    async finishWorkout() {
      if (confirm('Finish and save this workout?')) {
        this.$router.push({ name: VIEW.dashboard })
        // @todo - Save active records into history records
        await this.$store.dispatch('clearActiveWorkout')
      }
    },
  },
}
</script>

<template>
  <v-container>
    <ActiveExercise
      v-for="exercise of exercises"
      :key="exercise.id"
      :exercise="exercise"
    />

    <v-btn class="ml-3" color="success" @click="finishWorkout()">
      Finish Workout
    </v-btn>
  </v-container>
</template>
