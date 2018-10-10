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
  width: 200px;
  height: 200px;
  display: block;
  position: relative;
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;

  &.absolute {
    position: absolute;
  }

  @include breakpoint(max s) { width: 50px; height: 50px }
  @include breakpoint(max m) { width: 150px; height: 150px }

  &.right {
    right: -100px;
    background-position: center left;
    @include breakpoint(max s) { right: -25px }
    @include breakpoint(max m) { right: -75px }
  }
  &.left {
    left: -100px;
    background-position: center right;
    @include breakpoint(max s) { left: -25px }
    @include breakpoint(max m) { left: -75px }
  }

  &.lg {
    width: 300px;
    height: 300px;
    @include breakpoint(max s) { width: 150px; height: 150px }
    @include breakpoint(max m) { width: 200px; height: 200px }
    &.right {
      right: -150px;
      @include breakpoint(max s) { right: -75px }
      @include breakpoint(max m) { right: -100px }
    }
    &.left {
      left: -150px;
      @include breakpoint(max s) { left: -75px }
      @include breakpoint(max m) { left: -100px }
    }
  }
  &.xl {
    width: 600px;
    height: 600px;
    @include breakpoint(max s) { width: 200px; height: 200px }
    @include breakpoint(max m) { width: 300px; height: 300px }
    &.right {
      right: -300px;
      @include breakpoint(max s) { right: -100px }
      @include breakpoint(max m) { right: -150px }
    }
    &.left {
      left: -300px;
      @include breakpoint(max s) { left: -100px }
      @include breakpoint(max m) { left: -150px }
    }
  }
  &.sm {
    width: 150px;
    height: 150px;
    @include breakpoint(max s) { display: none }
    @include breakpoint(max m) { width: 50px; height: 50px }
    &.right {
      right: -75px;
      @include breakpoint(max m) { right: -25px }
    }
    &.left {
      left: -75px;
      @include breakpoint(max m) { left: -25px }
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
