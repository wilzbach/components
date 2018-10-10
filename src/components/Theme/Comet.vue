<template>
  <div :class="['comet', variant, { animated: animated }, size, {[`delay-${delay}`]: delay}, position, {absolute: absolute}]" />
</template>

<script>
export default {
  name: 'Comet',
  props: {
    variant: {
      type: String,
      default: 'green',
      validator: v => ['green', 'purple', 'red'].includes(v),
      description: 'The comet variant (green|purple|red)'
    },
    animated: {
      type: Boolean,
      default: false,
      description: 'Animate the comet'
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
      description: 'The comet variant (sm|lg|xl)'
    },
    delay: {
      type: [Number, String],
      default: 5,
      description: 'The animation delay before starting'
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes cometDrop {
  0% {
    transform: translate3d(0, 0, 0);
  }
  15%, 100% {
    transform: translate3d(-50vw, 130vh, 0);
  }
}

.comet {
  width: 140px;
  height: 140px;
  display: block;
  position: relative;
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;

  &.absolute {
    position: absolute;
  }

  &.animated {
    animation-name: cometDrop;
    animation-duration: 15s;
    animation-iteration-count: infinite;

    @for $i from 1 to 10 {
      &.delay-#{ $i * 5 } {
        animation-delay: #{$i * 5}s;
      }
    }
  }

  @include breakpoint(max s) { width: 50px; height: 50px }
  @include breakpoint(max m) { width: 75px; height: 75px }

  &.right {
    right: -70px;
    background-position: center left;
    @include breakpoint(max s) { right: -25px }
    @include breakpoint(max m) { right: -37.5px }
  }
  &.left {
    left: -70px;
    background-position: center right;
    @include breakpoint(max s) { left: -25px }
    @include breakpoint(max m) { left: -37.5px }
  }

  &.xl {
    width: 400px;
    height: 400px;
    @include breakpoint(max s) { width: 140px; height: 140px }
    @include breakpoint(max m) { width: 250px; height: 250px }
    &.right {
      right: -200px;
      @include breakpoint(max s) { right: -70px }
      @include breakpoint(max m) { right: -125px }
    }
    &.left {
      left: -200px;
      @include breakpoint(max s) { left: -70px }
      @include breakpoint(max m) { left: -125px }
    }
  }
  &.lg {
    width: 250px;
    height: 250px;
    @include breakpoint(max s) { width: 75px; height: 75px }
    @include breakpoint(max m) { width: 140px; height: 140px }
    &.right {
      right: -125px;
      @include breakpoint(max s) { right: -37.5px }
      @include breakpoint(max m) { right: -70px }
    }
    &.left {
      left: -125px;
      @include breakpoint(max s) { left: -37.5px }
      @include breakpoint(max m) { left: -70px }
    }
  }
  &.sm {
    width: 50px;
    height: 50px;
    @include breakpoint(max m) { display: none }
    &.right {
      right: -25px;
    }
    &.left {
      left: -25px;
    }
  }

  &.green { background-image: url('../../assets/img/comets/green.svg') }
  &.purple { background-image: url('../../assets/img/comets/purple.svg') }
  &.red { background-image: url('../../assets/img/comets/red.svg') }
}
</style>
