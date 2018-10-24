<template>
  <div :class="['rocket', size]" />
</template>

<script>
export default {
  name: 'Rocket',
  props: {
    size: {
      type: String,
      default: undefined,
      validator: v => ['sm', 'lg', 'xl'].includes(v),
      description: 'The rocket size (sm|lg|xl)'
    }
  }
}
</script>

<style lang="scss" scoped>
.rocket {
  width: 10rem;
  height: 15rem;
  display: block;
  position: relative;
  background-image: url('../../assets/img/rocket.svg');
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;

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
    height: 20.75rem;
    @include breakpoint(max s) { width: 9.375rem; height: 11.375rem }
    @include breakpoint(max m) { width: 12.5rem; height: 14.5rem }
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
    width: 25rem;
    height: 27rem;
    @include breakpoint(max s) { width: 12.5rem; height: 14.5rem }
    @include breakpoint(max m) { width: 18.75rem; height: 20.75rem }
    &.right {
      right: -12.5rem;
      @include breakpoint(max s) { right: -6.25rem }
      @include breakpoint(max m) { right: -9.375rem }
    }
    &.left {
      left: -12.5rem;
      @include breakpoint(max s) { left: -6.25rem }
      @include breakpoint(max m) { left: -9.375rem }
    }
  }
  &.sm {
    width: 9.375rem;
    height: 11.375rem;
    @include breakpoint(max s) { display: none }
    @include breakpoint(max m) { width: 3.125rem; height: 4.125rem }
    &.right {
      right: -4.6875rem;
      @include breakpoint(max m) { right: -1.5625rem }
    }
    &.left {
      left: -4.6875rem;
      @include breakpoint(max m) { left: -1.5625rem }
    }
  }
}
</style>
