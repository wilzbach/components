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
.navbar-toggler {
  background: transparent;
  outline: none;
  border: none;
  display: inline-flex;
  width: 20px;
  height: 20px;
  position: relative;
  cursor: pointer;
  padding: 0;

  & > span {
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    border-radius: 2px;
    opacity: 1;
    background-color: rgba(color(dark), .95);
    border-radius: 35%;

    &:nth-child(1) {
      transform: rotate(135deg)
    }

    &:nth-child(2) {
      transform: rotate(-135deg)
    }
  }
}
</style>
