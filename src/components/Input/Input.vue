<template>
  <div class="form-group" :class="[
      {'input-group': hasIcon},
      {'has-danger': error},
      {'focused': focused},
      {'input-group-alternative': alternative},
      {'has-label': label || $slots.label},
      {'has-success': valid === true},
      {'has-danger': valid === false}
    ]">
    <slot name="label">
      <label v-if="label" :class="labelClasses">
        {{label}}
        <span v-if="required">*</span>
      </label>
    </slot>

    <div v-if="addonLeftIcon || $slots.addonLeft" class="input-group-prepend">
      <span class="input-group-text">
        <slot name="addonLeft">
          <i :class="addonLeftIcon" />
        </slot>
      </span>
    </div>
    <slot v-bind="slotData">
      <input
        :value="value"
        v-on="listeners"
        v-bind="$attrs"
        class="form-control"
        :class="[{'is-valid': valid === true}, {'is-invalid': valid === false}, {'has-left-icon': (addonLeftIcon || $slots.addonLeft)}, {'has-right-icon': (addonRightIcon || $slots.addonRight || valid !== undefined)}, inputClasses]"
        aria-describedby="addon-right addon-left">
    </slot>
      <div v-if="addonRightIcon || $slots.addonRight || valid !== undefined" class="input-group-append">
        <span class="input-group-text">
          <slot name="addonRight">
            <i v-if="valid === undefined" :class="addonRightIcon" />
            <i v-else-if="valid === true" :class="`fa fa-check${alternative ? '-circle' : ''}`" />
            <i v-else-if="valid === false" :class="`fa fa-times${alternative ? '-circle' : ''}`" />
          </slot>
        </span>
      </div>
      <slot name="infoBlock"></slot>
      <slot name="helpBlock">
        <div class="text--danger invalid-feedback" v-if="error">
          {{ error }}
        </div>
      </slot>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'a-input',
  props: {
    required: {
      type: Boolean,
      description: 'Whether input is required (adds an asterix *)'
    },
    valid: {
      type: Boolean,
      description: 'Whether is valid',
      default: undefined
    },
    alternative: {
      type: Boolean,
      description: 'Whether input is of alternative layout'
    },
    label: {
      type: String,
      description: 'Input label (text before input)'
    },
    error: {
      type: String,
      description: 'Input error (below input)'
    },
    labelClasses: {
      type: String,
      description: 'Input label css classes'
    },
    inputClasses: {
      type: String,
      description: 'Input css classes'
    },
    value: {
      type: [String, Number],
      description: 'Input value'
    },
    addonRightIcon: {
      type: String,
      description: 'Addon right icon'
    },
    addonLeftIcon: {
      type: String,
      description: 'Addont left icon'
    }
  },
  data () {
    return {
      focused: false
    }
  },
  computed: {
    listeners () {
      return {
        ...this.$listeners,
        input: this.updateValue,
        focus: this.onFocus,
        blur: this.onBlur
      }
    },
    slotData () {
      return {
        ...this.listeners,
        focused: this.focused
      }
    },
    hasIcon () {
      const { addonRight, addonLeft } = this.$slots
      return (
        addonRight !== undefined ||
        addonLeft !== undefined ||
        this.addonRightIcon !== undefined ||
        this.addonLeftIcon !== undefined ||
        this.valid !== undefined
      )
    }
  },
  methods: {
    updateValue (evt) {
      let value = evt.target.value
      this.$emit('input', value)
    },
    onFocus (value) {
      this.focused = true
      this.$emit('focus', value)
    },
    onBlur (value) {
      this.focused = false
      this.$emit('blur', value)
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  overflow: visible;
  outline: none;
}

.form-group {
  display: flex;
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  color: color(dark);

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  &.focused {
    .input-group-prepend,
    .input-group-append,
    .form-control {
      color: color(dark);
    }
  }

  &.has-danger {
    .input-group-prepend,
    .input-group-append,
    .form-control {
      border-color: color(red);

      .input-group-text {
        color: color(red);
      }
    }
  }

  &.has-success {
    .input-group-prepend,
    .input-group-append,
    .form-control {
      border-color: color(green);

      .input-group-text {
        color: color(green);
      }
    }
  }

  label {
    display: flex;
    flex: 1 1 100%;
  }

  .invalid-feedback {
    display: flex;
    flex: 1 1 100%;
    font-size: fontSize(s);
    padding: 0.5rem 0.7rem 0.25rem;
  }

  .input-group-prepend,
  .input-group-append,
  .form-control {
    transition: all duration(s) $easing;
    color: $gray-400;
    border: 0.1rem solid $gray-300;
    border-radius: 0.5rem;
    height: 3rem;
    background-color: $white;
  }

  .input-group-prepend,
  .input-group-append {
    display: inline-flex;
    flex: 0.4 1 auto;
    width: max-content;
    justify-content: center;
    .input-group-text {
      display: inline-flex;
      align-items: center;
    }
  }

  .form-control {
    padding: 0.5rem 0.75rem;
    display: flex;
    width: min-content;
    flex: 1 1 auto;
    padding: 0.5rem 1.25rem;
    line-height: 1.5rem;
    transition: all transition(s) $easing;
    box-shadow: none;
    &::placeholder {
      color: $gray-400;
    }

    &:disabled {
      background-color: $gray-200;
      &,
      &::placeholder {
        color: $gray-500;
      }
    }
  }

  &.input-group {
    .form-control.has-left-icon {
      border-left: none;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      padding-left: 0;
    }

    .form-control.has-right-icon {
      border-right: none;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      padding-right: 0;
    }

    .input-group-prepend {
      border-right: none;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    .input-group-append {
      border-left: none;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }

  &.input-group-alternative {
    box-shadow: shadow(input);
    border-radius: 0.5rem;

    .input-group-prepend,
    .input-group-append,
    .form-control {
      border: none;
    }

    .input-group-prepend,
    .input-group-append {
      .input-group-text {
        font-size: fontSize(l);
      }
    }
  }
}
</style>
