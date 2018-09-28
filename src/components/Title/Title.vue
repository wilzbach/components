<template>
  <component v-bind:is="tag">
    <slot></slot>
  </component>
</template>

<script>
import { FadeTransition } from 'vue2-transitions'

export default {
  name: 'a-title',
  props: {
    size: {
      type: Number,
      default: 1,
      description: 'Title size'
    },
    display: {
      type: Boolean,
      default: false,
      description: 'Title display style'
    }
  },
  computed: {
    tag() {
      return `h${size}`
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
