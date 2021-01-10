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

  mounted() {
    this.weight = this.activeSet ? this.activeSet.weight : null
    this.reps = this.activeSet ? this.activeSet.reps : null
    this.duration = this.activeSet ? this.activeSet.duration : null
    this.distance = this.activeSet ? this.activeSet.distance : null
  },

  computed: {
    activeSet() {
      const state = this.$store.getters['activeExerciseRecords/getState']
      const record = state.find((r) => r.exerciseId === this.exercise.id)
      const set = record.sets[this.set]
      return set
    },

    weightHint() {
      return 'none'
    },

    repsHint() {
      return 'none'
    },

    durationHint() {
      return 'none'
    },

    distanceHint() {
      return 'none'
    },
  },

  methods: {
    saveChanges() {
      const payload = {
        id: this.exercise.id,
        set: this.set,
        data: {
          weight: this.weight,
          reps: this.reps,
          duration: this.duration,
          distance: this.distance,
        },
      }
      this.$store.dispatch('activeExerciseRecords/update', payload)
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
        :hint="weightHint"
        persistent-hint
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
        :hint="repsHint"
        persistent-hint
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
        :hint="durationHint"
        persistent-hint
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
        :hint="distanceHint"
        persistent-hint
      />
    </v-col>
  </v-row>
</template>
