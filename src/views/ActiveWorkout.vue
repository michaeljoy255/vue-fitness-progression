<script>
import { VIEW } from '../constants/globals'
import ActiveExerciseCard from '../components/view/ActiveExerciseCard.vue'

export default {
  name: VIEW.activeWorkout,

  components: {
    ActiveExerciseCard,
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
        await this.$store.dispatch('finishWorkout')
      }
    },
  },
}
</script>

<template>
  <v-container>
    <ActiveExerciseCard
      v-for="exercise of activeExercises"
      :key="exercise.id"
      :exercise="exercise"
    />

    <v-btn class="ml-3" color="success" @click="finishWorkout()">
      Finish Workout
    </v-btn>
  </v-container>
</template>
