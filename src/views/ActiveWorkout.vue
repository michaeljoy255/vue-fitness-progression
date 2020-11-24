<script>
import { VIEW } from '../constants/globals'

export default {
  name: VIEW.activeWorkout,

  created() {
    console.log(this.$route.params.id)
  },
}
</script>

<template>
  <div>Active Workout View {{ $route.params.id }}</div>
</template>
