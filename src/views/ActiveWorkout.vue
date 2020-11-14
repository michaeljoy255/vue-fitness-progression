<script>
import { VIEW } from '../constants/globals'

export default {
  name: VIEW.activeWorkout,
}
</script>

<template>
  <div>Active Workout View {{ $route.params.id }}</div>
</template>
