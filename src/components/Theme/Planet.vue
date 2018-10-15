<template>
  <div :class="['planet', variant, size, position, {absolute: absolute}]" />
</template>

<script>
export default {
  name: 'Planet',
  props: {
    variant: {
      type: String,
      default: 'blue',
      validator: v => ['blue', 'purple', 'red', 'yellow'].includes(v),
      description: 'The planet variant (blue|purple|red|yellow)'
    },
    absolute: {
      type: Boolean,
      default: false,
      description: 'Set the comet position to absolute'
    },
    position: {
      type: String,
      default: undefined,
      validator: v => ['left', 'right'].includes(v),
      description: 'The planet position'
    },
    size: {
      type: String,
      default: undefined,
      validator: v => ['sm', 'lg', 'xl'].includes(v),
      description: 'The planet variant (sm|lg|xl)'
    }
  }
}
</script>

<style lang="scss" scoped>
.planet {
  width: 12.5rem;
  height: 12.5rem;
  display: block;
  position: relative;
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;

  &.absolute {
    position: absolute;
  }

  @include breakpoint(max s) { width: 3.125rem; height: 3.125rem }
  @include breakpoint(max m) { width: 9.375rem; height: 9.375rem }

  &.right {
    right: -6.25rem;
    background-position: center left;
    @include breakpoint(max s) { right: -1.5625rem }
    @include breakpoint(max m) { right: -4.6875rem }
  }
  &.left {
    left: -6.25rem;
    background-position: center right;
    @include breakpoint(max s) { left: -1.5625rem }
    @include breakpoint(max m) { left: -4.6875rem }
  }

  &.lg {
    width: 18.75rem;
    height: 18.75rem;
    @include breakpoint(max s) { width: 9.375rem; height: 9.375rem }
    @include breakpoint(max m) { width: 12.5rem; height: 12.5rem }
    &.right {
      right: -9.375rem;
      @include breakpoint(max s) { right: -4.6875rem }
      @include breakpoint(max m) { right: -6.25rem }
    }
    &.left {
      left: -9.375rem;
      @include breakpoint(max s) { left: -4.6875rem }
      @include breakpoint(max m) { left: -6.25rem }
    }
  }
  &.xl {
    width: 37.5rem;
    height: 37.5rem;
    @include breakpoint(max s) { width: 12.5rem; height: 12.5rem }
    @include breakpoint(max m) { width: 18.75rem; height: 18.75rem }
    &.right {
      right: -18.75rem;
      @include breakpoint(max s) { right: -6.25rem }
      @include breakpoint(max m) { right: -9.375rem }
    }
    &.left {
      left: -18.75rem;
      @include breakpoint(max s) { left: -6.25rem }
      @include breakpoint(max m) { left: -9.375rem }
    }
  }
  &.sm {
    width: 9.375rem;
    height: 9.375rem;
    @include breakpoint(max s) { display: none }
    @include breakpoint(max m) { width: 3.125rem; height: 3.125rem }
    &.right {
      right: -4.6875rem;
      @include breakpoint(max m) { right: -1.5625rem }
    }
    &.left {
      left: -4.6875rem;
      @include breakpoint(max m) { left: -1.5625rem }
    }
  }

  &.blue {
    background-image: url('../../assets/img/planets/blue.svg')
  }
  &.purple {
    background-image: url('../../assets/img/planets/purple.svg')
  }
  &.red {
    background-image: url('../../assets/img/planets/red.svg')
  }
  &.yellow {
    background-image: url('../../assets/img/planets/yellow.svg')
  }
}
</style>
