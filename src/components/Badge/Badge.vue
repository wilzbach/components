<template>
  <component
    :is="tag"
    class="badge"
    :class="{
      [`badge--${state}`]: state,
      'badge--outline': outline,
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
    },
    outline: {
      type: Boolean,
      default: false,
      description: 'Outline effect on the badge'
    }
  }
}
</script>

<style lang='scss'>
.badge {
  display: inline-flex;
  overflow: hidden;
  padding: 0.25rem 0.5rem;
  font-size: fontSize(s);
  white-space: nowrap;
  border-radius: 0.25rem;
  text-transform: none;
  cursor: default;

  &:not(.lower) {
    text-transform: uppercase;
  }

  &:empty {
    display: none;
  }

  @each $state, $value in $states {
    &.badge--#{$state} {
      color: darken($value, 10%);
      &:not(.badge--outline) {
        background-color: rgba($value, 0.8);
      }
      &.badge--outline {
        border-width: 1px;
        border-style: solid;
        border-color: rgba($value, 0.8);
      }
    }
  }

  @each $color, $value in $colors {
    &.badge--#{$color} {
      color: darken($value, 10%);
      &:not(.badge--outline) {
        background-color: rgba($value, 0.8);
      }
      &.badge--outline {
        border-width: 1px;
        border-style: solid;
        border-color: rgba($value, 0.8);
      }
    }
  }
}
</style>
