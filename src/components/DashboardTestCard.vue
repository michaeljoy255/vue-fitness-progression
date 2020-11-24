<script>
import { COMPONENT } from '../constants/globals.js'

export default {
  name: COMPONENT.dashboardTestCard,

  methods: {
    async setDefaults() {
      await this.$store.dispatch('exercises/setDefaults')
      await this.$store.dispatch('workouts/setDefaults')
    },

    async clearState() {
      await this.$store.dispatch('exercises/clearState')
      await this.$store.dispatch('workouts/clearState')
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
          <v-btn color="success" @click="setDefaults()">Set Defaults</v-btn>
          <v-btn color="error" @click="clearState()">Clear State</v-btn>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
