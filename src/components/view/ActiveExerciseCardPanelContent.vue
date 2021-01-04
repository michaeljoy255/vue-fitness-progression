<script>
export default {
  props: {
    set: {
      type: Number,
      required: true,
    },
    exercise: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      weight: 0,
      reps: 0,
      duration: 0,
      distance: 0,
    }
  },

  watch: {
    weight(newVal) {
      console.log(`Weight (Set ${this.set + 1}): ${newVal}`)
    },
    reps(newVal) {
      console.log(`Reps (Set ${this.set + 1}): ${newVal}`)
    },
    duration(newVal) {
      console.log(`Duration (Set ${this.set + 1}): ${newVal}`)
    },
    distance(newVal) {
      console.log(`Distance (Set ${this.set + 1}): ${newVal}`)
    },
  },
}
</script>

<template>
  <v-row>
    <v-col v-if="exercise.inputs.hasWeight" class="col-6 col-sm-3">
      <v-text-field
        v-model="weight"
        type="number"
        min="0"
        max="1000"
        label="Weight"
        dense
        outlined
        prepend-icon="fitness_center"
      />
    </v-col>
    <v-col v-if="exercise.inputs.hasReps" class="col-6 col-sm-3">
      <v-text-field
        v-model="reps"
        type="number"
        min="0"
        max="1000"
        label="Reps"
        dense
        outlined
        prepend-icon="filter_list"
      />
    </v-col>
    <v-col v-if="exercise.inputs.hasDuration" class="col-6 col-sm-3">
      <v-text-field
        v-model="duration"
        type="number"
        min="0"
        max="1000"
        label="Duration"
        dense
        outlined
        prepend-icon="history"
      />
    </v-col>
    <v-col v-if="exercise.inputs.hasDistance" class="col-6 col-sm-3">
      <v-text-field
        v-model="distance"
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
