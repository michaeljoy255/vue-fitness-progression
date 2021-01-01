<script>
import { VIEW } from '../../constants/globals.js'

export default {
  computed: {
    activeWorkoutId() {
      return this.$store.getters['activeWorkoutRecord/getState'].workoutId
    },

    activeWorkoutCreatedAt() {
      return this.$store.getters['activeWorkoutRecord/getState'].createdAt
    },

    workout() {
      return this.$store.getters['workouts/findById'](this.activeWorkoutId)
    },
  },

  methods: {
    resumeWorkout() {
      this.$router.push({
        name: VIEW.activeWorkout,
        params: { id: this.activeWorkoutId },
      })
    },

    cancelWorkout() {
      if (confirm('Cancel this active workout?')) {
        this.$store.dispatch('activeExerciseRecords/delete')
        this.$store.dispatch('activeWorkoutRecord/delete')
      }
    },
  },
}
</script>

<template>
  <v-col class="col-12">
    <v-card>
      <v-card-title>{{ workout.name }}</v-card-title>

      <v-card-subtitle>
        {{ new Date(activeWorkoutCreatedAt).toDateString() }}
      </v-card-subtitle>

      <v-btn icon absolute top right @click="cancelWorkout()">X</v-btn>

      <v-card-actions>
        <v-container>
          <v-btn color="success" @click="resumeWorkout()">
            Resume Workout
          </v-btn>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
