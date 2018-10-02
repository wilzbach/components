<template>
  <component v-bind:is="tag" class="btn" v-bind:class="{
      [`btn--${state}`]: state,
      [`btn--${size}`]: size,
      'btn--block': block,
      'btn--outline': outline,
      'btn--no-animation': noAnimation,
      'btn--no-shadow': noShadow
    }" @click="handleClick">
    <span v-if="$slots.icon">
      <slot name="icon"></slot>
    </span>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </component>
</template>

<script>
export default {
  name: 'a-button',
  props: {
    tag: {
      type: String,
      default: 'button',
      description: 'Button tag (default -> button)'
    },
    state: {
      type: String,
      default: 'default',
      description: 'Button state'
    },
    size: {
      type: String,
      default: '',
      description: 'Button size lg|sm'
    },
    outline: {
      type: Boolean,
      default: false,
      description: 'Whether button style is outline'
    },
    block: {
      type: Boolean,
      default: false,
      description: 'Whether button is of block type'
    },
    noShadow: {
      type: Boolean,
      default: false,
      description: 'Deactivate shadow on button'
    },
    noAnimation: {
      type: Boolean,
      default: false,
      description: 'Deactivate animations on hover'
    }
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  display: inline-flex;
  align-items: center;
  letter-spacing: 0.025rem;
  font-size: fontSize(m);
  padding: 0.625rem 1.25rem;
  border-radius: 0.25rem;
  line-height: 1.5;
  border: 1px solid transparent;
  box-shadow: $btn-box-shadow;
  outline: none;
  transition: all duration(s) $easing;
  cursor: pointer;

  @include hover {
    box-shadow: $btn-hover-box-shadow;
    transform: translateY(-1px);
  }

  span + span {
    margin-left: 0.75em;
  }

  @each $state, $value in $states {
    &.btn--#{$state} {
      @include bg-gradient($value);
      color: $white;
      border-color: $value;

      &.btn--outline {
        color: $value;

        @include hover {
          @include bg-gradient($value);
          color: $white;
        }
      }
    }
  }

  &.btn--light {
    background: transparent;
    color: color(dark);
    @include hover {
      transform: none;
    }
  }

  &.btn--dark {
    background: color(dark);
    color: color(light);

    &.btn--outline {
      color: color(dark);
      border-color: color(dark);
      background: transparent;

      @include hover {
        background: color(dark);
        color: color(light);
      }
    }
  }

  &.btn--no-animation {
    transition: none;
    @include hover {
      transform: none;
    }
  }

  &.btn--no-shadow {
    box-shadow: none;
  }

  &.btn--neutral {
    background: $white !important;
    color: state(primary) !important;
  }

  &.btn--outline {
    background: transparent;
  }

  &.btn--block {
    display: flex;
    width: 100%;
  }

  &.btn--s {
    font-size: fontSize(s);
    padding: 0.25rem 0.5rem;
  }

  &.btn--l {
    padding: 0.875rem 1rem;
  }
}
</style>
