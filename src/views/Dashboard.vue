<script>
import { VIEW } from '../constants/globals'
import RecommendationsContainer from '../components/view/RecommendationsContainer.vue'
import WorkoutsContainer from '../components/view/WorkoutsContainer.vue'

export default {
  name: VIEW.dashboard,

  components: {
    RecommendationsContainer,
    WorkoutsContainer,
  },

  async created() {
    const activeWorkoutInState = this.$store.getters['activeWorkout/isReady']

    if (!activeWorkoutInState) {
      await this.$store.dispatch('activeWorkout/fetch')
      await this.$store.dispatch('activeExercises/fetch')
    }
  },

  computed: {
    renderWorkouts() {
      return this.$store.getters['workouts/isReady']
    },
  },
}
</script>

<template>
  <v-container>
    <RecommendationsContainer />
    <WorkoutsContainer v-if="renderWorkouts" />
  </v-container>
</template>
