<template>
    <button type="button" class="navbar-toggler"
            data-toggle="collapse"
            @click="handleClick"
            v-bind:data-target="`#${target}`"
            v-bind:aria-controls="target"
            v-bind:aria-expanded="expanded"
            aria-label="Toggle navigation">
        <span></span>
        <span></span>
    </button>
</template>
<script>
export default {
  name: 'a-close-button',
  props: {
    target: {
      type: [String, Number],
      description: 'Close button target element'
    },
    expanded: {
      type: Boolean,
      description: 'Whether button is expanded (aria-expanded attribute)'
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
.close {
  @if $enable-transitions {
    transition: $transition-base;
  }
  & > span:not(.sr-only) {
    background-color: $close-bg;
    color: $close-color;
    line-height: 17px;
    height: 1.25rem;
    width: 1.25rem;
    border-radius: 50%;
    font-size: 1.25rem;
    display: block;
    @if $enable-transitions {
      transition: $transition-base;
    }
  }

  &:hover,
  &:focus {
    background-color: $close-hover-bg;
    color: $close-hover-color;
    outline: none;

    span:not(.sr-only) {
      background-color: $close-hover-bg;
    }
  }
}
</style>
