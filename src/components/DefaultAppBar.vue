<script>
import { COMPONENT } from '../constants/globals.js'

export default {
  name: COMPONENT.defaultAppBar,

  data() {
    return {
      date: new Date().toLocaleDateString(),
    }
  },
}
</script>

<template>
  <v-app-bar app dark color="secondary">
    <v-toolbar-title>Fitness LP</v-toolbar-title>

    <v-spacer />

    {{ date }}
  </v-app-bar>
</template>
