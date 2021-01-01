<script>
import { LAYOUT } from './constants/globals'

export default {
  async created() {
    await Promise.all([
      this.$store.dispatch('exercises/fetch'),
      this.$store.dispatch('workouts/fetch'),
      this.$store.dispatch('activeExerciseRecords/fetch'),
      this.$store.dispatch('activeWorkoutRecord/fetch'),
      this.$store.dispatch('historyExerciseRecords/fetch'),
      this.$store.dispatch('historyWorkoutRecords/fetch'),
    ])
  },

  computed: {
    layout() {
      return this.$route.meta.layout || LAYOUT.default
    },
  },
}
</script>

<template>
  <v-app>
    <component :is="layout">
      <router-view />
    </component>
  </v-app>
</template>
