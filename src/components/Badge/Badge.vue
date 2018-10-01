<template>
  <component v-bind:is="tag" class="badge" v-bind:class="[
      state && `badge--${state}`
    ]">
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
  text-transform: uppercase;

  &:empty {
    display: none;
  }

  @each $state, $value in $states {
    &.badge--#{$state} {
      background-color: rgba(lighten($value, 25%), 0.5);
      color: saturate(darken($value, 10%), 10);
    }
  }
}
</style>
