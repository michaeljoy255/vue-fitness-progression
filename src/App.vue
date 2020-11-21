<script>
import { COMPONENT, LAYOUT } from './constants/globals'

export default {
  name: COMPONENT.app,

  created() {
    this.$store.dispatch('initApp')
  },

  computed: {
    layout() {
      return this.$route.meta.layout || LAYOUT.default
    },
  },
}
</script>

<template>
  <v-app>
    <component :is="layout">
      <router-view />
    </component>
  </v-app>
</template>
