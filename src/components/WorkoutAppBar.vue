<script>
import { COMPONENT, VIEW } from '../constants/globals.js'

export default {
  name: COMPONENT.workoutAppBar,

  data() {
    return {
      workoutId: this.$route.params.id,
    }
  },

  computed: {
    workoutName() {
      return this.$store.state.workouts.workouts.findById(this.workoutId).name
    },
  },

  methods: {
    cancelWorkout() {
      if (confirm('Cancel this workout?')) {
        this.$store.dispatch('cancelActiveWorkout')
        this.$router.push({
          name: VIEW.dashboard,
        })
      }
    },
  },
}
</script>

<template>
  <v-app-bar app color="secondary">
    <v-toolbar-title>{{ workoutName }}</v-toolbar-title>

    <v-spacer />

    <v-btn icon right @click="cancelWorkout()">X</v-btn>
  </v-app-bar>
</template>
