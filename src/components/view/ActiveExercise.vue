<script>
export default {
  props: {
    exerciseId: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <v-col class="col-12">
    <v-card>
      <v-card-title>ExerciseId: {{ exerciseId }}</v-card-title>

      <v-card-subtitle>
        Exercise Inputs
      </v-card-subtitle>

      <v-card-actions>
        <v-container>
          <div>
            Exercise actions (add/remove set?)
          </div>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
