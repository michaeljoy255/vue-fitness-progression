<script>
import { VIEW } from '../../constants/globals.js'

export default {
  computed: {
    activeWorkoutRecord() {
      return this.$store.getters['getActiveWorkoutRecord']
    },

    activeWorkout() {
      return this.$store.getters['getActiveWorkout']
    },
  },

  methods: {
    resumeWorkout() {
      this.$router.push({ name: VIEW.activeWorkout })
    },

    async cancelWorkout() {
      if (confirm('Cancel this active workout?')) {
        await this.$store.dispatch('clearActiveRecords')
      }
    },
  },
}
</script>

<template>
  <v-col class="col-12">
    <v-card>
      <v-card-title>{{ activeWorkout.name }}</v-card-title>

      <v-card-subtitle>
        {{ new Date(activeWorkoutRecord.createdAt).toDateString() }}
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
