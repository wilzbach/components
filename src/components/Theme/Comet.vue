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
    transform: translate3d(-150vw, 170vh, 0);
  }
}

.comet {
  width: 8.75rem;
  height: 8.75rem;
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

  @include breakpoint(max s) { width: 3.125rem; height: 3.125rem }
  @include breakpoint(max m) { width: 4.688rem; height: 4.688rem }

  &.right {
    right: -4.375rem;
    background-position: center left;
    @include breakpoint(max s) { right: -1.5625rem }
    @include breakpoint(max m) { right: -2.344rem }
  }
  &.left {
    left: -4.375rem;
    background-position: center right;
    @include breakpoint(max s) { left: -1.5625rem }
    @include breakpoint(max m) { left: -2.344rem }
  }

  &.xl {
    width: 25rem;
    height: 25rem;
    @include breakpoint(max s) { width: 8.75rem; height: 8.75rem }
    @include breakpoint(max m) { width: 15.625rem; height: 15.625rem }
    &.right {
      right: -12.5rem;
      @include breakpoint(max s) { right: -4.375rem }
      @include breakpoint(max m) { right: -7.8125rem }
    }
    &.left {
      left: -12.5rem;
      @include breakpoint(max s) { left: -4.375rem }
      @include breakpoint(max m) { left: -7.8125rem }
    }
  }
  &.lg {
    width: 15.625rem;
    height: 15.625rem;
    @include breakpoint(max s) { width: 4.688rem; height: 4.688rem }
    @include breakpoint(max m) { width: 8.75rem; height: 8.75rem }
    &.right {
      right: -7.8125rem;
      @include breakpoint(max s) { right: -2.344rem }
      @include breakpoint(max m) { right: -4.375rem }
    }
    &.left {
      left: -7.8125rem;
      @include breakpoint(max s) { left: -2.344rem }
      @include breakpoint(max m) { left: -4.375rem }
    }
  }
  &.sm {
    width: 3.125rem;
    height: 3.125rem;
    @include breakpoint(max m) { display: none }
    &.right {
      right: -1.5625rem;
    }
    &.left {
      left: -1.5625rem;
    }
  }

  &.green { background-image: url('../../assets/img/comets/green.svg') }
  &.purple { background-image: url('../../assets/img/comets/purple.svg') }
  &.red { background-image: url('../../assets/img/comets/red.svg') }
}
</style>
