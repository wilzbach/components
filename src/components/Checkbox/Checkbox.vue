<template>
  <div class="custom-control custom-checkbox"
       v-bind:class="[{disabled: disabled}, inlineClass]">
    <input v-bind:id="cbId"
           class="custom-control-input"
           type="checkbox"
           v-bind:disabled="disabled"
           v-model="model"/>
    <label v-bind:for="cbId" class="custom-control-label">
      <slot>
        <span v-if="inline">&nbsp;</span>
      </slot>
    </label>
  </div>
</template>
<script>
export default {
  name: 'a-checkbox',
  model: {
    prop: 'checked'
  },
  props: {
    checked: {
      type: [Array, Boolean],
      description: 'Whether checkbox is checked'
    },
    disabled: {
      type: Boolean,
      description: 'Whether checkbox is disabled'
    },
    inline: {
      type: Boolean,
      description: 'Whether checkbox is inline'
    }
  },
  data () {
    return {
      cbId: '',
      touched: false
    }
  },
  computed: {
    model: {
      get () {
        return this.checked
      },
      set (check) {
        if (!this.touched) {
          this.touched = true
        }
        this.$emit('input', check)
      }
    },
    inlineClass () {
      if (this.inline) {
        return `form-check-inline`
      }
    }
  },
  created () {
    this.cbId = Math.random()
      .toString(16)
      .slice(2)
  }
}
</script>

<style lang="scss">
input[type="radio"], input[type="checkbox"] {
  box-sizing: border-box;
  padding: 0;
}

.custom-control {
  position: relative;
  display: block;
  min-height: 1.5rem;

  .custom-control-input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  &.custom-checkbox .custom-control-label::before {
      border-radius: 0.2rem;
  }

  &.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
    border-color: #a100ff;
  }

  &.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
    background: #a100ff linear-gradient(180deg, #af26ff, #a100ff) repeat-x;
  }

  .custom-control-input:checked ~ .custom-control-label::before {
    color: #fff;
    background: #a100ff linear-gradient(180deg, #af26ff, #a100ff) repeat-x;
    box-shadow: none;
  }

  &.custom-checkbox .custom-control-label::before {
    border-radius: 0.2rem;
  }

  .custom-control-label { cursor: pointer }

  .custom-control-label::before {
    border: 1px solid #cad1d7;
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .custom-control-label::before {
    position: absolute;
    top: 0.125rem;
    left: -1.75rem;
    display: block;
    width: 1.25rem;
    height: 1.25rem;
    pointer-events: none;
    content: "";
    user-select: none;
    background-color: #fff;
    box-shadow: none;
  }

  &.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='#{$white}' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E");
  }

  .custom-control-label::after {
    position: absolute;
    top: 0.125rem;
    left: -1.75rem;
    display: block;
    width: 1.25rem;
    height: 1.25rem;
    content: "";
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }
}

</style>
