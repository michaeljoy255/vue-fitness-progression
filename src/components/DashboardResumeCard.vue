<script>
import { COMPONENT } from '../constants/globals.js'

export default {
  name: COMPONENT.DashboardResumeCard,
}
</script>

<template>
  <v-col class="col-12">
    <v-card>
      <v-card-title>Workout Name</v-card-title>

      <v-card-subtitle>
        Workout started on Date
      </v-card-subtitle>

      <v-card-actions>
        <v-container>
          <v-btn color="success">Resume Workout</v-btn>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
