<script>
import { VIEW } from '../constants/globals'

export default {
  name: VIEW.activeWorkout,
}
</script>

<template>
  <v-container>Active Workout View {{ $route.params.id }}</v-container>
</template>
