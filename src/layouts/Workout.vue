<script>
import { LAYOUT } from '../constants/globals.js'
import WorkoutAppBar from '../components/WorkoutAppBar.vue'

export default {
  name: LAYOUT.workout,

  components: {
    WorkoutAppBar,
  },
}
</script>

<template>
  <div>
    <WorkoutAppBar />
    <v-main>
      <slot />
    </v-main>
  </div>
</template>
