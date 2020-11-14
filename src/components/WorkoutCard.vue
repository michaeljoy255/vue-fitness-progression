<script>
import { COMPONENT } from '../constants/globals.js'
import StaticTimer from '../components/StaticTimer.vue'

export default {
  name: COMPONENT.workoutCard,

  components: {
    StaticTimer,
  },

  methods: {
    getPreviousDate() {
      return new Date().toDateString()
    },
  },
}
</script>

<template>
  <v-col class="col-12 col-sm-6 col-md-4 col-xl-3">
    <v-card>
      <v-card-title>Workout Name</v-card-title>

      <v-card-subtitle>
        Previously completed on {{ getPreviousDate() }}
      </v-card-subtitle>

      <v-card-text>
        <StaticTimer />
      </v-card-text>

      <v-card-actions>
        <v-container>
          <v-btn block color="primary">Begin Workout</v-btn>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
