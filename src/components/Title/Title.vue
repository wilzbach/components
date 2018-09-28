<template>
  <component v-bind:is="tag" class="title" :class="`title--${size}`">
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
    }
  },
  computed: {
    tag() {
      return `h${this.size}`
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  @each $size, $value in $titleSizes {
    &.title--#{$size} {
      font-size: $value;
    }
  }
}
</style>
