<script>
import { COMPONENT, LAYOUT } from './constants/globals'

export default {
  name: COMPONENT.app,

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
