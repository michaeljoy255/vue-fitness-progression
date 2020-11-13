<template>
  <div>
    <div>
      Home View
    </div>

    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import { VIEW } from '../constants/globals'

export default {
  name: VIEW.home,

  components: {
    HelloWorld,
  },
}
</script>
