<script>
import { VIEW } from '../constants/globals'
import ActiveExercise from '../components/view/ActiveExercise.vue'

export default {
  name: VIEW.activeWorkout,

  components: {
    ActiveExercise,
  },
}
</script>

<template>
  <v-container>
    <ActiveExercise />
    <ActiveExercise />
    <ActiveExercise />
    <ActiveExercise />
    <ActiveExercise />
    <!-- Finish Workout Button (TODO)-->
  </v-container>
</template>
