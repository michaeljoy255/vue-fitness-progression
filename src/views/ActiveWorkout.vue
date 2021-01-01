<script>
import { VIEW } from '../constants/globals'
import ActiveExercise from '../components/view/ActiveExercise.vue'

export default {
  name: VIEW.activeWorkout,

  components: {
    ActiveExercise,
  },

  computed: {
    activeExercises() {
      return this.$store.getters['getActiveExercises']
    },
  },

  methods: {
    async finishWorkout() {
      if (confirm('Finish and save this workout?')) {
        this.$router.push({ name: VIEW.dashboard })
        // @todo - Save active records into history records
        await this.$store.dispatch('clearActiveRecords')
      }
    },
  },
}
</script>

<template>
  <v-container>
    <ActiveExercise
      v-for="exercise of activeExercises"
      :key="exercise.id"
      :exercise="exercise"
    />

    <v-btn class="ml-3" color="success" @click="finishWorkout()">
      Finish Workout
    </v-btn>
  </v-container>
</template>
