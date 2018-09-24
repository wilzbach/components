<template>
    <fade-transition>
        <div class="alert" v-bind:class="[`alert-${type}`, {'alert-dismissible': dismissible}]" role="alert" v-if="visible">
            <slot v-if="!dismissible">
                <span v-if="icon" class="alert-inner--icon">
                    <i v-bind:class="icon"></i>
                </span>
                <span v-if="$slots.text" class="alert-inner--text">
                    <slot name="text"></slot>
                </span>
            </slot>
            <template v-else>
                <slot>
                    <span v-if="icon" class="alert-inner--icon">
                     <i v-bind:class="icon"></i>
                    </span>
                    <span v-if="$slots.text" class="alert-inner--text">
                    <slot name="text"></slot>
                </span>
                </slot>
                <slot name="dismiss-icon">
                    <button type="button" data-dismiss="alert" aria-label="Close" class="close" @click="dismissAlert">
                        <span aria-hidden="true">×</span>
                    </button>
                </slot>
            </template>
        </div>
    </fade-transition>
</template>
<script>
import { FadeTransition } from "vue2-transitions";

export default {
  name: "a-alert",
  components: {
    FadeTransition
  },
  props: {
    type: {
      type: String,
      default: "default",
      description: "Alert type"
    },
    icon: {
      type: String,
      default: "",
      description: "Alert icon. Will be overwritten by default slot"
    },
    dismissible: {
      type: Boolean,
      default: false,
      description: "Whether alert is closes when clicking"
    }
  },
  data() {
    return {
      visible: true
    };
  },
  methods: {
    dismissAlert() {
      this.visible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.alert {
  padding: $alert-padding-y $alert-padding-x;
  border: 0;
  font-size: $font-size-sm;
  @include border-radius($alert-border-radius);

  .alert-inner--icon {
    font-size: 1.25rem;
    margin-right: 1.25rem;
    display: inline-block;
    vertical-align: middle;

    i.ni {
      position: relative;
      top: 1px;
    }
  }
  .alert-inner--text {
    display: inline-block;
    vertical-align: middle;
  }
}

.alert:not(.alert-secondary) {
  color: $white;
}

[class*="alert-"] {
  .alert-link {
    color: $white;
    border-bottom: 1px dotted rgba($white, 0.5);
  }
}

.alert-heading {
  font-weight: $font-weight-bold;
  font-size: $h4-font-size;
  margin-top: 0.15rem;
}

.alert-dismissible {
  .close {
    top: 50%;
    right: $alert-padding-x;
    padding: 0;
    transform: translateY(-50%);
    color: rgba($white, 0.6);
    opacity: 1;

    &:hover,
    &:focus {
      color: rgba($white, 0.9);
      opacity: 1 !important;
    }

    @include media-breakpoint-down(xs) {
      top: 1rem;
      right: 0.5rem;
    }

    & > span:not(.sr-only) {
      font-size: 1.5rem;
      background-color: transparent;
      color: rgba($white, 0.6);
    }

    &:hover,
    &:focus {
      & > span:not(.sr-only) {
        background-color: transparent;
        color: rgba($white, 0.9);
      }
    }
  }
}
</style>
