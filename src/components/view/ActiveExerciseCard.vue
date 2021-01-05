<script>
import ActiveExerciseCardHeader from './ActiveExerciseCardHeader.vue'
import ActiveExerciseCardPanelContent from './ActiveExerciseCardPanelContent.vue'

export default {
  props: {
    exercise: {
      type: Object,
      required: true,
    },
  },

  components: {
    ActiveExerciseCardHeader,
    ActiveExerciseCardPanelContent,
  },

  data() {
    return {
      panelLength: 1,
    }
  },

  methods: {
    addSet() {
      if (this.panelLength < 10) {
        this.panelLength++
      }
    },
    removeSet() {
      if (this.panelLength > 1) {
        this.panelLength--
      }
    },
  },
}
</script>

<template>
  <v-col class="col-12 px-0">
    <v-card>
      <ActiveExerciseCardHeader
        :name="exercise.name"
        :equipment="exercise.equipment || ''"
        :category="exercise.category || ''"
        :description="exercise.description"
      />

      <v-expansion-panels dense tile accordion active-class="secondary">
        <v-expansion-panel v-for="(item, i) in this.panelLength" :key="i">
          <v-expansion-panel-header class="font-weight-bold">
            Set {{ i + 1 }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <ActiveExerciseCardPanelContent :set="i" :exercise="exercise" />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <v-card-actions>
        <v-btn @click="addSet()" color="success" :disabled="panelLength >= 10">
          <span>Add Set</span>
        </v-btn>
        <v-btn
          fab
          small
          @click="removeSet()"
          color="error"
          :disabled="panelLength <= 1"
        >
          <v-icon>remove</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
