<script>
export default {
  methods: {
    async loadDefaults() {
      await this.$store.dispatch('exercises/fetchDefaults')
      await this.$store.dispatch('workouts/fetchDefaults')
    },

    async clearState() {
      await this.$store.dispatch('exercises/clearState')
      await this.$store.dispatch('workouts/clearState')
      await this.$store.dispatch('activeWorkout/clearState')
      await this.$store.dispatch('activeExercises/clearState')
    },

    async clearStorage() {
      await this.$store.dispatch('exercises/delete')
      await this.$store.dispatch('workouts/delete')
      await this.$store.dispatch('activeWorkout/delete')
      await this.$store.dispatch('activeExercises/delete')
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
