<script>
import { COMPONENT } from '../constants/globals.js'

export default {
  name: COMPONENT.workoutCard,
}
</script>

<template>
  <v-col class="col-12 col-sm-6 col-md-4 col-xl-3">
    <v-card>
      <v-card-title>Workout Name</v-card-title>

      <v-card-subtitle>Previous Date</v-card-subtitle>

      <v-card-text>Timer -:-:-</v-card-text>

      <v-card-actions>
        <v-container>
          <v-btn block color="primary">Begin Workout</v-btn>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
