<script>
import { COMPONENT } from '../constants/globals.js'
import ExerciseRecordContainer from '../models/ExerciseRecordContainer.js'
import ExerciseContainer from '../models/ExerciseContainer.js'
import WorkoutContainer from '../models/WorkoutContainer.js'
import WorkoutRecord from '../models/WorkoutRecord.js'

export default {
  name: COMPONENT.dashboardTestCard,

  methods: {
    async loadDefaults() {
      await this.$store.dispatch('exercises/loadDefaults')
      await this.$store.dispatch('workouts/loadDefaults')
    },

    async clearState() {
      await this.$store.dispatch('exercises/clear')
      await this.$store.dispatch('workouts/clear')
      await this.$store.dispatch('activeWorkout/clear')
      await this.$store.dispatch('activeExercises/clear')
    },

    async clearStorage() {
      await ExerciseContainer.deleteExercises()
      await ExerciseRecordContainer.deleteActiveExercises()
      await WorkoutContainer.deleteWorkouts()
      await WorkoutRecord.deleteActiveWorkout()
    },
  },
}
</script>

<template>
  <v-col class="col-12">
    <v-card>
      <v-card-title>Dashboard Testing</v-card-title>

      <v-card-actions>
        <v-container>
          <v-btn color="success mr-3" @click="loadDefaults()">
            Set Defaults
          </v-btn>
          <v-btn color="warning mr-3" @click="clearState()">
            Clear All State
          </v-btn>
          <v-btn color="error mr-3" @click="clearStorage()">
            Clear All Storage
          </v-btn>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
