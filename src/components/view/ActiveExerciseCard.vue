<script>
import ActiveExerciseCardHeader from './ActiveExerciseCardHeader.vue'
import ActiveExerciseCardSet from './ActiveExerciseCardSet.vue'

export default {
  props: {
    exercise: {
      type: Object,
      required: true,
    },
  },

  components: {
    ActiveExerciseCardHeader,
    ActiveExerciseCardSet,
  },

  data() {
    return {
      setLimit: 1,
    }
  },

  methods: {
    addSet() {
      if (this.setLimit < 10) {
        this.setLimit++
      }
    },

    removeSet() {
      if (this.setLimit > 1) {
        this.setLimit--
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

      <v-card-text>
        <div v-for="(item, i) in this.setLimit" :key="i">
          <v-chip v-if="exercise.inputs.hasSets" x-small class="mb-1">
            SET {{ i + 1 }}
          </v-chip>
          <ActiveExerciseCardSet :set="i" :exercise="exercise" />
        </div>
      </v-card-text>

      <v-card-actions v-if="exercise.inputs.hasSets">
        <v-btn @click="addSet()" color="success" :disabled="setLimit >= 10">
          <span>Add Set</span>
        </v-btn>
        <v-btn
          fab
          small
          @click="removeSet()"
          color="error"
          :depressed="setLimit <= 1"
          :disabled="setLimit <= 1"
        >
          <v-icon>remove</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
