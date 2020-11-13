<script>
import { LAYOUT } from '../constants/globals'

export default {
  name: LAYOUT.default,
}
</script>

<template>
  <div>
    <div>
      Default Layout
    </div>

    <v-main>
      <slot />
    </v-main>
  </div>
</template>
