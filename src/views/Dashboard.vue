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
    const activeWorkoutInState = this.$store.getters[
      'activeWorkoutRecord/isReady'
    ]

    if (!activeWorkoutInState) {
      await this.$store.dispatch('activeWorkoutRecord/fetch')
      await this.$store.dispatch('activeExerciseRecords/fetch')
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
