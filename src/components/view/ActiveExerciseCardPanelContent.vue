<script>
export default {
  props: {
    inputs: {
      type: Object,
      required: true,
    },
  },
}
</script>

<template>
  <v-row>
    <v-col v-if="inputs.hasWeight" class="col-6 col-sm-3">
      <v-text-field
        type="number"
        min="0"
        max="1000"
        label="Weight"
        dense
        outlined
        prepend-icon="fitness_center"
      />
    </v-col>
    <v-col v-if="inputs.hasReps" class="col-6 col-sm-3">
      <v-text-field
        type="number"
        min="0"
        max="1000"
        label="Reps"
        dense
        outlined
        prepend-icon="filter_list"
      />
    </v-col>
    <v-col v-if="inputs.hasDuration" class="col-6 col-sm-3">
      <v-text-field
        type="number"
        min="0"
        max="1000"
        label="Duration"
        dense
        outlined
        prepend-icon="history"
      />
    </v-col>
    <v-col v-if="inputs.hasDistance" class="col-6 col-sm-3">
      <v-text-field
        type="number"
        min="0"
        max="1000"
        label="Distance"
        dense
        outlined
        prepend-icon="place"
      />
    </v-col>
  </v-row>
</template>
