<template>
  <div class="form-group" :class="[
      {'input-group': hasIcon},
      {'focused': focused},
      {'input-group-alternative': alternative},
      {'has-label': label || $slots.label},
      {'has-success': valid === true},
      {'has-danger': error && valid === false},
      {[`size-${size}`]: size }
    ]">
    <slot name="label">
      <label v-if="label" :class="labelClasses">
        {{label}}
        <span v-if="required">*</span>
      </label>
    </slot>
    <div class="input-group-nowrap">
      <template v-if="options !== undefined">
        <v-select :value="value"
            v-on="listenersSelect"
            v-bind="$attrs"
            :options="options" />
      </template>
      <template v-else-if="textarea">
        <textarea
          ref="textarea"
          class="form-control"
          :value="value"
          v-on="listeners"
          v-bind="$attrs" />
      </template>
      <template v-else>
        <div v-if="addonLeftIcon || $slots.addonLeft" class="input-group-prepend">
          <span class="input-group-text">
            <slot name="addonLeft">
              <font-awesome-icon v-if="['search'].includes(addonLeftIcon)" :icon="addonLeftIcon" />
              <i v-else :class="addonLeftIcon" />
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
              <font-awesome-icon v-else-if="valid === true" :icon="`check${alternative ? '-circle' : ''}`" />
              <font-awesome-icon v-else-if="valid === false" :icon="`times${alternative ? '-circle' : ''}`" />
            </slot>
          </span>
        </div>
      </template>
    </div>
    <slot name="infoBlock"></slot>
    <slot name="helpBlock">
      <div class="text--danger invalid-feedback" v-if="error && valid === false">
        {{ error }}
      </div>
    </slot>
  </div>
</template>

<script>
import autosize from 'autosize'
import vSelect from 'vue-select'

export default {
  inheritAttrs: false,
  name: 'a-input',
  components: { vSelect },
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
    options: {
      type: Array,
      description: 'The options (select input)',
      default: () => undefined
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
      type: [String, Number, Array],
      description: 'Input value'
    },
    addonRightIcon: {
      type: String,
      description: 'Addon right icon'
    },
    addonLeftIcon: {
      type: String,
      description: 'Addont left icon'
    },
    textarea: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: undefined,
      validator: (v) => ['s', 'l'].includes(v),
      description: 'size of the input. default: regular (s|l)'
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
        change: this.onChange,
        focus: this.onFocus,
        blur: this.onBlur
      }
    },
    listenersSelect () {
      return {
        ...this.$listeners,
        input: this.updateValueSelect,
        change: this.onChange,
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
  mounted: function () {
    if (this.textarea) {
      autosize(this.$refs.textarea)
    }
  },
  methods: {
    updateValue (evt) {
      let value = evt.target.value
      this.$emit('input', value)
    },
    updateValueSelect (value) {
      this.$emit('input', value)
    },
    onFocus (value) {
      this.focused = true
      this.$emit('focus', value)
    },
    onBlur (value) {
      this.focused = false
      this.$emit('blur', value)
    },
    onChange (value) {
      this.$emit('change', value)
    }
  }
}
</script>

<style lang="scss">
.form-group {
  .input-group-nowrap {
    .v-select.searchable {
      width: 100%;
      &.disabled {
        .dropdown-toggle {
          background-color: darken(gray(100), 1%);
        }
      }

      &:not(.single) {
        .dropdown-toggle {
          .vs__selected-options {
            .selected-tag {
              background-color: gray(200);
              border-color: gray(300);
            }
          }
        }
      }

      .dropdown-toggle {
        border-radius: 0.5rem;
        border-color: gray(300);
        .vs__selected-options {
          padding: 0.4rem 1rem;

          .selected-tag {
            margin: .25rem 1rem 0 0;
            font-size: 1rem;

            .close {
              margin-top: 4px;
              margin-left: .3rem;
            }
          }
          input {
            font-size: 1rem;
          }
        }
        .vs__actions {
          padding: 0 1rem 0 1rem;
          .clear {
            span {
              position: absolute;
              top: 0.9rem;
              right: 2.5rem;
            }
          }
        }
      }
      .dropdown-menu {
        width: 100%;
        top: -.5rem;
        border-color: gray(300);
      }
    }
  }
}
</style>
<style lang="scss" scoped>
input {
  overflow: visible;
  outline: none;
}

.form-group {
  display: block;
  flex: 0 0 auto;
  width: auto;
  align-items: end;
  justify-content: flex-start;
  flex-wrap: wrap;
  color: color(dark);
  font-size: 1rem;

  .input-group-nowrap {
    display: flex;
    flex-wrap: nowrap;
  }

  &.size-s {
    font-size: fontSize(s);
    .input-group-prepend,
    .input-group-append,
    .form-control {
      height: 1.75rem;
    }
    .form-control {
      padding: 0.25rem .75rem;
    }
  }

  &.size-l {
    font-size: fontSize(l);
    .input-group-prepend,
    .input-group-append,
    .form-control {
      height: 4rem;
    }
    .form-control {
      padding: 0.75rem 1.5rem;
    }
  }

  & + .form-group {
    margin-top: 1rem;
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

  textarea.form-control {
    min-height: 4.25rem;
  }

  .input-group-prepend,
  .input-group-append,
  .form-control {
    color: gray(800);
    outline: none;
    border: 0.1rem solid gray(300);
    border-radius: 0.5rem;
    height: 3rem;
    background-color: transparent;
    font-size: inherit;
  }

  .input-group-prepend,
  .input-group-append {
    display: inline-flex;
    flex: 0 1 auto;
    padding: 0 1rem;
    width: max-content;
    justify-content: center;
    .input-group-text {
      display: inline-flex;
      align-items: center;
    }
  }

  .form-control {
    display: flex;
    width: min-content;
    flex: 1 1 auto;
    padding: 0.5rem 1.25rem;
    line-height: 1.5rem;
    box-shadow: none;
    &::placeholder {
      color: gray(500);
    }

    &:disabled {
      cursor: not-allowed;
      background-color: darken(gray(100), 1%);
      & {
        color: gray(800);
      }
      &::placeholder {
        color: gray(500);
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
