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
      weight: null,
      reps: null,
      duration: null,
      distance: null,
    }
  },

  methods: {
    saveChanges() {
      console.log('--------------------')
      console.log(`Exercise ${this.exercise.name} - SET ${this.set + 1}`)
      // need a check for invalid input (replace with a 0 or null?)
      console.log(`Weight ${this.weight}`)
      console.log(`Reps ${this.reps}`)
      console.log(`Duration ${this.duration}`)
      console.log(`Distance ${this.distance}`)
    },
  },
}
</script>

<template>
  <v-row>
    <v-col v-if="exercise.inputs.hasWeight" class="col-6 col-sm-3">
      <v-text-field
        v-model="weight"
        @blur="saveChanges()"
        type="number"
        min="0"
        max="9999"
        label="Weight"
        dense
        outlined
        prepend-icon="fitness_center"
      />
    </v-col>
    <v-col v-if="exercise.inputs.hasReps" class="col-6 col-sm-3">
      <v-text-field
        v-model="reps"
        @blur="saveChanges()"
        type="number"
        min="0"
        max="9999"
        label="Reps"
        dense
        outlined
        prepend-icon="filter_list"
      />
    </v-col>
    <v-col v-if="exercise.inputs.hasDuration" class="col-6 col-sm-3">
      <v-text-field
        v-model="duration"
        @blur="saveChanges()"
        type="number"
        min="0"
        max="9999"
        label="Duration"
        dense
        outlined
        prepend-icon="history"
      />
    </v-col>
    <v-col v-if="exercise.inputs.hasDistance" class="col-6 col-sm-3">
      <v-text-field
        v-model="distance"
        @blur="saveChanges()"
        type="number"
        min="0"
        max="9999"
        label="Distance"
        dense
        outlined
        prepend-icon="place"
      />
    </v-col>
  </v-row>
</template>
