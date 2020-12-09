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
      return this.$store.getters['workouts/findNameById'](this.workoutId)
    },
  },

  methods: {
    leaveWorkout() {
      if (confirm('Return to the Dashboard?')) {
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

    <v-btn icon right @click="leaveWorkout()">X</v-btn>
  </v-app-bar>
</template>
