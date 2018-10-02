<template>
  <fade-transition>
    <div class="alert" v-bind:class="[`alert--${state}`, {'alert-dismissible': dismissible}]" role="alert" v-if="visible">
      <slot>
        <span v-if="icon" class="alert__icon">
          <i v-bind:class="icon"></i>
        </span>
        <span v-if="$slots.text" class="alert__text">
          <slot name="text"></slot>
        </span>
      </slot>
      <button type="button" v-if="dismissible" data-dismiss="alert" aria-label="Close" class="alert__close" @click="dismiss">
        <i class="fa fa-close"></i>
      </button>
    </div>
  </fade-transition>
</template>

<script>
import { FadeTransition } from 'vue2-transitions'

export default {
  name: 'a-alert',
  components: {
    FadeTransition
  },
  props: {
    state: {
      type: String,
      default: 'default',
      description: 'Alert type'
    },
    icon: {
      type: String,
      default: '',
      description: 'Alert icon. Will be overwritten by default slot'
    },
    dismissible: {
      type: Boolean,
      default: false,
      description: 'Whether alert is closes when clicking'
    }
  },
  data () {
    return {
      visible: true
    }
  },
  methods: {
    dismiss () {
      this.visible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.alert {
  display: flex;
  padding: 1.2rem 1.5rem;
  border-radius: 0.5rem;
  justify-content: space-between;
  font-size: fontSize(m);
  align-items: center;

  > * + * {
    margin-left: 1.25rem;
  }

  @each $state, $value in $states {
    &.alert--#{$state} {
      background-color: $value;
      border-color: $value;
      color: color-yiq($value);

      > * {
        color: color-yiq($value);
      }
    }
  }

  @each $color, $value in $colors {
    &.alert--#{$color} {
      background-color: $value;
      border-color: $value;
      color: color-yiq($value);

      > * {
        color: color-yiq($value);
      }
    }
  }

  .alert__icon {
    display: inline-block;
  }

  .alert__text {
    flex-grow: 1;
  }

  .alert__close {
    background-color: transparent;
    border: 0;
    cursor: pointer;
    transition: all duration(s) $easing;

    &:hover {
      opacity: 0.65;
    }
  }
}
</style>
