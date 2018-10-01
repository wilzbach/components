<template>
  <component
    :is="tag"
    class="badge"
    :class="{
      [`badge--${state}`]: state,
      lower
    }">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'a-badge',
  props: {
    tag: {
      type: String,
      default: 'span',
      description: 'Html tag to use for the badge.'
    },
    state: {
      type: String,
      default: 'default',
      description: 'Badge state'
    },
    lower: {
      type: Boolean,
      default: false,
      description: 'Let the value as is. Default: uppercase'
    }
  }
}
</script>

<style lang='scss'>
.badge {
  display: inline-flex;
  overflow: hidden;
  padding: 0.35rem 0.375rem;
  font-size: fontSize(s);
  line-height: 1;
  white-space: nowrap;
  border-radius: 0.25rem;
  text-transform: none;

  &:not(.lower) {
    text-transform: uppercase;
  }

  &:empty {
    display: none;
  }

  @each $state, $value in $states {
    &.badge--#{$state} {
      background-color: rgba($value, 0.8);
      color: darken($value, 10%);
    }
  }

  @each $color, $value in $colors {
    &.badge--#{$color} {
      background-color: rgba($value, 0.8);
      color: darken($value, 10%);
    }
  }
}
</style>
