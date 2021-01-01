<script>
export default {
  methods: {
    async loadDefaults() {
      await this.$store.dispatch('exercises/useDefaults')
      await this.$store.dispatch('workouts/useDefaults')
    },

    async clearApp() {
      await this.$store.dispatch('exercises/delete')
      await this.$store.dispatch('workouts/delete')
      await this.$store.dispatch('activeExerciseRecords/delete')
      await this.$store.dispatch('activeWorkoutRecord/delete')
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

          <v-btn color="error mr-3" @click="clearApp()">
            Clear App
          </v-btn>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
