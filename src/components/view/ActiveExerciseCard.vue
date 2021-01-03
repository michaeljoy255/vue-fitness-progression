<script>
export default {
  props: {
    exercise: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      panelLength: 1,
    }
  },

  computed: {
    exerciseEquipment() {
      const equipment = this.exercise.equipment
      return equipment ? ', ' + equipment : ''
    },
  },
}
</script>

<template>
  <v-col class="col-12 px-0">
    <v-card>
      <v-card-title>
        {{ exercise.name }}{{ exerciseEquipment }}
        <v-spacer />
        <span class="body-2 text--disabled">
          {{ exercise.category.toUpperCase() }}
        </span>
      </v-card-title>

      <v-card-subtitle>{{ exercise.description }}</v-card-subtitle>

      <v-expansion-panels dense tile accordion active-class="secondary">
        <v-expansion-panel v-for="(item, i) in this.panelLength" :key="i">
          <v-expansion-panel-header> Set {{ i + 1 }} </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-row>
              <v-col v-if="exercise.inputs.hasWeight" class="col-6 col-sm-3">
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
              <v-col v-if="exercise.inputs.hasReps" class="col-6 col-sm-3">
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
              <v-col v-if="exercise.inputs.hasDuration" class="col-6 col-sm-3">
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
              <v-col v-if="exercise.inputs.hasDistance" class="col-6 col-sm-3">
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
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <v-card-actions>
        <v-btn fab @click="panelLength++" color="success">
          <v-icon>add</v-icon>
        </v-btn>
        <v-btn fab @click="panelLength--" color="error">
          <v-icon>remove</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
