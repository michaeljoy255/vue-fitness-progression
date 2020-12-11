<script>
import { VIEW } from '../constants/globals.js'

export default {
  computed: {
    activeWorkoutId() {
      return this.$store.state.activeWorkout.activeWorkout.workoutId
    },
  },

  methods: {
    resumeWorkout() {
      this.$router.push({
        name: VIEW.activeWorkout,
        params: {
          id: this.activeWorkoutId,
        },
      })
    },
  },
}
</script>

<template>
  <v-col class="col-12">
    <v-card>
      <v-card-title>{{ activeWorkoutId }}</v-card-title>

      <v-card-subtitle>
        Workout started on Date
      </v-card-subtitle>

      <v-card-actions>
        <v-container>
          <v-btn color="success" @click="resumeWorkout()">Resume Workout</v-btn>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
