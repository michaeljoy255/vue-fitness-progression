<script>
export default {
  methods: {
    async loadDefaults() {
      await this.$store.dispatch('loadDefaults')
    },

    async clearAppData() {
      await this.$store.dispatch('clearAppData')
    },
  },
}
</script>

<template>
  <v-col class="col-12">
    <v-card>
      <v-card-title>Dashboard Testing</v-card-title>

      <v-card-actions>
        <v-container>
          <v-btn color="success mr-3" @click="loadDefaults()">
            Set Defaults
          </v-btn>

          <v-btn color="error mr-3" @click="clearAppData()">
            Clear App
          </v-btn>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
