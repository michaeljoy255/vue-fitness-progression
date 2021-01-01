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
    const otherWorkout = this.$store.getters['activeWorkoutRecords/isReady']

    if (!otherWorkout) {
      await this.$store.dispatch('fetchActiveRecords')
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
