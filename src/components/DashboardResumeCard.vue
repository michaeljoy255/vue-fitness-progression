<script>
import { VIEW } from '../constants/globals.js'

export default {
  computed: {
    activeWorkoutId() {
      return this.$store.state.activeWorkout.activeWorkout.workoutId
    },

    activeWorkoutCreatedAt() {
      return this.$store.state.activeWorkout.activeWorkout.createdAt
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

      <v-card-actions>
        <v-container>
          <v-btn color="success" @click="resumeWorkout()">Resume Workout</v-btn>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
