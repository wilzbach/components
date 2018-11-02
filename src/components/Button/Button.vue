<template>
  <component v-bind:is="tag" class="btn" v-bind:class="{
      [`btn--${state}`]: state,
      [`btn--${size}`]: size,
      'btn--block': block,
      'btn--outline': outline,
      'btn--no-animation': noAnimation,
      'btn--no-shadow': noShadow
    }" @click="handleClick">
    <span v-if="$slots.icon && iconLeft && !iconRight">
      <slot name="icon"></slot>
    </span>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
    <span v-if="$slots.icon && iconRight">
      <slot name="icon"></slot>
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
    },
    iconLeft: {
      type: Boolean,
      default: true,
      description: 'add Left icon'
    },
    iconRight: {
      type: Boolean,
      default: false,
      description: 'add Right icon'
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
  display: inline-block;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.025rem;
  font-size: fontSize(m);
  padding: .5rem 1rem;
  border-radius: 0.5rem;
  box-shadow: shadow(button);
  outline: none;
  border: 0;
  transition: all duration(xs) $easing;
  cursor: pointer;
  transform: translateY(0);
  font-weight: bold;

  & + .btn {
    margin-left: .5rem;
  }

  &:hover, &:active {
    transform: scale(1.025);
    box-shadow: shadow(button, hover);
  }

  svg {
    width: fontSize(m);
    height: fontSize(m);
  }

  i {
    vertical-align: middle;
  }

  span + span {
    margin-left: 0.5em;
  }

  @each $state, $value in $states {
    &.btn--#{$state} {
      background-color: $value;
      color: $white;

      &:hover, &:active {
        background-color: darken($value, 2%);
        
      }

      &.btn--outline {
        color: $value;
        border-color: $value;

        &:hover, &:active {
          background-color: darken($value, 2%);
          color: $white;
        }
      }
    }
  }

  &.btn--light {
    background: color(light);
    color: color(dark);
    &:hover, &:active {
      // transform: none;
    }
  }

  &.btn--dark {
    background: color(dark);
    color: color(light);

    &.btn--outline {
      color: color(dark);
      border-color: color(dark);
      background: transparent;

      &:hover, &:active {
        background: darken(color(dark), 2%);
        color: color(light);
      }
    }
  }

  &.btn--no-animation {
    transition: none;
    &:hover, &:active {
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
    border: 1px solid transparent;
    background: transparent;
    box-shadow: none;
    transform: none;
  }

  &.btn--block {
    display: flex;
    width: 100%;
  }

  &.btn--s {
    font-size: fontSize(s);
    padding: 0.35rem .65rem;

    svg {
      width: fontSize(s);
      height: fontSize(s);
    }

    span + span {
      margin-left: 0.25em;
    }
  }

  &.btn--l {
    font-size: fontSize(l);
    padding: 1.167rem 1.2rem;

    svg {
      width: fontSize(l);
      height: fontSize(l);
    }

    span + span {
      margin-left: 0.75em;
    }
  }
}
</style>
