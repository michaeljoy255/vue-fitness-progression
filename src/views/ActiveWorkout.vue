<script>
import { VIEW } from '../constants/globals'
import ActiveExercise from '../components/view/ActiveExercise.vue'

export default {
  name: VIEW.activeWorkout,

  components: {
    ActiveExercise,
  },

  computed: {
    exerciseIds() {
      return ''
    },
  },

  methods: {
    async finishWorkout() {
      if (confirm('Finish and save this workout?')) {
        this.$router.push({ name: VIEW.dashboard })
        // @todo - Save active records into history records
        await this.$store.dispatch('clearActiveWorkout')
      }
    },
  },
}
</script>

<template>
  <v-container>
    <ActiveExercise v-for="id of exerciseIds" :key="id" />

    <v-btn class="ml-3" color="success" @click="finishWorkout()">
      Finish Workout
    </v-btn>
  </v-container>
</template>
