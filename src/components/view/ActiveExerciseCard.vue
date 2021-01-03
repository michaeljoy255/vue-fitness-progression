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
          <v-expansion-panel-header> Set {{ i + 1 }} </v-expansion-panel-header>
          <v-expansion-panel-content>
            <ActiveExerciseCardPanelContent :inputs="exercise.inputs" />
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <v-card-actions>
        <v-btn @click="panelLength++" color="success">
          <span>Add Set</span>
        </v-btn>
        <v-btn fab small @click="panelLength--" color="error">
          <v-icon>remove</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
