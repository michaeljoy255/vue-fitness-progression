<script>
export default {
  methods: {
    async useDefaults() {
      if (confirm('Load default exercises and workouts?')) {
        await this.$store.dispatch('useDefaults')
      }
    },

    async clearApp() {
      if (confirm('Clear all app data?')) {
        await this.$store.dispatch('clearApp')
      }
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
          <v-btn color="success mr-3" @click="useDefaults()">
            Set Defaults
          </v-btn>

          <v-btn color="error mr-3" @click="clearApp()">
            Clear App
          </v-btn>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
