<script>
import { VIEW } from '../../constants/globals.js'

export default {
  computed: {
    workoutName() {
      const activeWorkoutRecord = this.$store.getters[
        'activeWorkoutRecords/getState'
      ][0]
      const workoutId = activeWorkoutRecord.workoutId
      const originWorkout = this.$store.getters['workouts/findById'](workoutId)
      return originWorkout.name
    },
  },

  methods: {
    leaveWorkout() {
      if (confirm('Return to the Dashboard?')) {
        this.$router.push({ name: VIEW.dashboard })
      }
    },
  },
}
</script>

<template>
  <v-app-bar app color="secondary">
    <v-toolbar-title>{{ workoutName }}</v-toolbar-title>

    <v-spacer />

    <v-btn icon right @click="leaveWorkout()">X</v-btn>
  </v-app-bar>
</template>
