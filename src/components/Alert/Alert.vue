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
      <slot name="dismiss-icon" v-if="dismissible">
        <button type="button" data-dismiss="alert" aria-label="Close" class="alert__close" @click="dismiss">
          <i class="fa fa-close"></i>
        </button>
      </slot>
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
  border-radius: 0.25rem;
  justify-content: space-between;
  font-size: fontSize(m);
  align-items: center;

  @each $state, $value in $states {
    &.alert--#{$state} {
      @include bg-gradient(lighten(desaturate($value, 10%), 5%));
      color: $white;
      border-color: $value;
    }
  }

  .alert__icon {
    display: inline-block;
  }

  .alert__text {
    flex-grow: 1;
    margin: 0 1.25rem;
  }

  .alert__close {
    background-color: transparent;
    border: 0;
    color: $white;
    cursor: pointer;
    color: rgba($white, 0.6);
    transition: all duration(s) $easing;

    &:hover {
      color: rgba($white, 0.9);
    }
  }
}
</style>
