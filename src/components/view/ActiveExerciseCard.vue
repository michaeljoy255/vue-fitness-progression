<script>
export default {
  props: {
    exercise: {
      type: Object,
      required: true,
    },
  },
}
</script>

<template>
  <v-col class="col-12">
    <v-card>
      <v-card-title>
        {{ exercise.name }}, {{ exercise.equipment }}
        <v-spacer />
        <span class="body-2 text--disabled">
          {{ exercise.category.toUpperCase() }}
        </span>
      </v-card-title>

      <v-card-subtitle>{{ exercise.description }}</v-card-subtitle>

      <v-card-text>{{ exercise.inputs }}</v-card-text>

      <v-card-actions>
        <v-container>
          <v-btn color="primary">
            Exercise Inputs (WIP)
          </v-btn>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
