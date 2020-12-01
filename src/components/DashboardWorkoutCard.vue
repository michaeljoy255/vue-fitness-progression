<script>
import { COMPONENT, VIEW } from '../constants/globals.js'

export default {
  name: COMPONENT.dashboardWorkoutCard,

  props: {
    workout: {
      type: Object,
      required: true,
    },
  },

  methods: {
    beginWorkout() {
      const currentWorkout = this.$store.getters['activeWorkout/isReady']

      if (!currentWorkout) {
        this.loadWorkout()
      } else {
        if (confirm('Replace in progress workout?')) {
          this.loadWorkout()
        }
      }
    },

    loadWorkout() {
      this.$router.push({
        name: VIEW.activeWorkout,
        params: {
          id: this.workout.id,
        },
      })

      this.$store.dispatch('activeWorkout/save', this.workout.id)
      this.$store.dispatch('activeExercises/save', this.workout.exercises)
    },
  },
}
</script>

<template>
  <v-col class="col-12 col-sm-6 col-md-4 col-xl-3">
    <v-card>
      <v-card-title>{{ workout.name }}</v-card-title>

      <v-card-subtitle>
        {{ workout.getPreviousRecordCreatedAt() }}
      </v-card-subtitle>

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
