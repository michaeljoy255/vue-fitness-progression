<script>
import ActiveExerciseCardHeader from './ActiveExerciseCardHeader.vue'
import ActiveExerciseCardSet from './ActiveExerciseCardSet.vue'

export default {
  props: {
    exerciseRecord: {
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
      setLimit: 1 + this.exerciseRecord.sets.length,
    }
  },

  computed: {
    activeExercise() {
      return this.$store.getters['getActiveExerciseById'](
        this.exerciseRecord.exerciseId
      )
    },

    controledSetLimit() {
      if (this.setLimit > 10) return 10
      return this.setLimit
    },
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
        /**
         * @todo remove last element from sets and save the payload
         */
      }
    },
  },
}
</script>

<template>
  <v-col class="col-12 px-0">
    <v-card>
      <ActiveExerciseCardHeader
        :name="activeExercise.name"
        :equipment="activeExercise.equipment"
        :category="activeExercise.category"
        :description="activeExercise.description"
      />

      <v-card-text>
        <div v-for="(item, i) in controledSetLimit" :key="i">
          <v-chip v-if="activeExercise.inputs.hasSets" x-small class="mb-1">
            SET {{ i + 1 }}
          </v-chip>
          <ActiveExerciseCardSet
            :set="i"
            :exerciseRecord="exerciseRecord"
            :exerciseInputs="activeExercise.inputs"
          />
        </div>
      </v-card-text>

      <v-card-actions v-if="activeExercise.inputs.hasSets">
        <v-btn
          @click="addSet()"
          color="success"
          :disabled="controledSetLimit >= 10"
        >
          <span>Add Set</span>
        </v-btn>
        <v-btn
          fab
          small
          @click="removeSet()"
          color="error"
          :depressed="controledSetLimit <= 1"
          :disabled="controledSetLimit <= 1"
        >
          <v-icon>remove</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
