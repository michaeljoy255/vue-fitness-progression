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
      // @TODO: Must use route workout id to locate workout recrod and get exerciseIds
      return ''
    },
  },

  methods: {
    finishWorkout() {
      if (confirm('Finish and save this workout?')) {
        this.$router.push({ name: VIEW.dashboard })
        // Need to save active records into record stores...
        this.$store.dispatch('activeWorkoutRecord/delete')
        this.$store.dispatch('activeExerciseRecords/delete')
      }
    },
  },
}
</script>

<template>
  <v-container>
    <ActiveExercise v-for="id of exerciseIds" :key="id" />
    <!-- <ActiveExercise />
    <ActiveExercise />
    <ActiveExercise />
    <ActiveExercise /> -->

    <v-btn class="ml-3" color="success" @click="finishWorkout()">
      Finish Workout
    </v-btn>
  </v-container>
</template>
