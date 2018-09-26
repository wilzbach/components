<template>
  <component v-bind:is="tag" class="btn" v-bind:class="{
      [`btn--${state}`]: state,
      [`btn--${size}`]: size,
      'btn--block': block,
      'btn--outline': outline
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
