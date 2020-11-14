<script>
import { COMPONENT } from '../constants/globals.js'

export default {
  name: COMPONENT.staticTimer,
}
</script>

<template>
  <div class="mx-auto">
    {{ new Date().toDateString() }}
  </div>
</template>
