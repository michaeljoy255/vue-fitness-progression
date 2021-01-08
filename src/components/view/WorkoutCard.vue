<script>
import { VIEW } from '../../constants/globals.js'

export default {
  props: {
    workout: {
      type: Object,
      required: true,
    },
  },

  methods: {
    beginWorkout() {
      const otherWorkout = this.$store.getters['activeWorkoutRecords/isReady']

      if (!otherWorkout) {
        this.routeToActiveWorkout()
      } else {
        if (confirm('Replace in progress workout?')) {
          this.routeToActiveWorkout()
        }
      }
    },

    async routeToActiveWorkout() {
      const payload = {
        workoutId: this.workout.id,
        exerciseIds: this.workout.exerciseIds,
      }
      this.$router.push({ name: VIEW.activeWorkout })
      await this.$store.dispatch('createActiveRecords', payload)
    },
  },
}
</script>

<template>
  <v-col class="col-12 col-sm-6 col-md-4 col-xl-3">
    <v-card>
      <v-card-title>{{ workout.name }}</v-card-title>

      <!-- <v-card-subtitle>
        Previous record createdAt goes here...
      </v-card-subtitle> -->

      <v-card-actions>
        <v-container>
          <v-btn block color="primary" @click="beginWorkout()">
            Begin Workout
          </v-btn>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
