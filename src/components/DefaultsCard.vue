<script>
import { COMPONENT } from '../constants/globals.js'

export default {
  name: COMPONENT.defaultsCard,
}
</script>

<template>
  <v-col class="col-12">
    <v-card>
      <v-card-title>No Workouts Found</v-card-title>

      <v-card-subtitle>
        Would you like to prefill the app with default exercises and workouts?
      </v-card-subtitle>

      <v-card-actions>
        <v-container>
          <v-btn color="success">Use Defaults</v-btn>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
