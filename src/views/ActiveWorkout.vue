<script>
import { VIEW } from '../constants/globals'
import ActiveExercise from '../components/view/ActiveExercise.vue'

export default {
  name: VIEW.activeWorkout,

  components: {
    ActiveExercise,
  },

  methods: {
    finishWorkout() {
      if (confirm('Finish and save this workout?')) {
        this.$router.push({ name: VIEW.dashboard })
        // Need to save active records into record stores...
        this.$store.dispatch('activeWorkout/delete')
        this.$store.dispatch('activeExercises/delete')
      }
    },
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

    <v-btn class="ml-3" color="success" @click="finishWorkout()">
      Finish Workout
    </v-btn>
  </v-container>
</template>
