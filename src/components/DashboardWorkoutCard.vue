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
      this.$router.push({
        name: VIEW.activeWorkout,
        params: {
          id: this.workout.id,
        },
      })

      this.$store.dispatch('activeWorkout/create', this.workout.id)
      this.$store.dispatch('activeExercises/create', this.workout.exercises)
    },
  },
}
</script>

<template>
  <v-col class="col-12 col-sm-6 col-md-4 col-xl-3">
    <v-card>
      <v-card-title>{{ workout.name }}</v-card-title>

      <v-card-subtitle>
        Previous
        {{ new Date(workout.previousRecord.createdAt).toDateString() }}
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
