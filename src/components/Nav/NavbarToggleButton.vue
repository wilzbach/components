<template>
    <button
      :aria-controls="target"
      :aria-expanded="toggled"
      :class="dark ? 'light' : 'dark'"
      :data-target="target"
      aria-label="Toggle navigation"
      class="navbar-toggler"
      data-toggle="collapse"
      type="button">
      <span class="navbar-toggler-icon" />
    </button>
</template>

<script>
export default {
  name: 'a-navbar-toggle-button',
  props: {
    target: {
      type: [String, Number],
      description: 'Button target element'
    },
    dark: {
      type: Boolean,
      default: false,
      description: 'Whether display a dark theme icon or not'
    },
    toggled: {
      type: Boolean,
      default: false,
      description: 'Whether button is toggled'
    }
  }
}
</script>

<style lang="scss" scoped>

$navbar-dark-color: rgba($white, .95);
$navbar-light-color: rgba(color(dark), .95);
$dark-toggler-icon-bg: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='#{$navbar-dark-color}' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E") !default;
$light-toggler-icon-bg: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='#{$navbar-light-color}' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E") !default;

.navbar-toggler {
  color: rgba(color(light), 0.95);
  outline: none;
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: 0.0625rem solid transparent;
  border-radius: 0.25rem;
  display: block;
  position: relative;

  &:not(:disabled) {
    cursor: pointer;
  }

  &.light .navbar-toggler-icon {
    background-image: $light-toggler-icon-bg;
  }

  &.dark .navbar-toggler-icon {
    background-image: $dark-toggler-icon-bg;
  }

  .navbar-toggler-icon {
    display: inline-flex;
    vertical-align: middle;
    width: 1.75rem;
    height: 1.75rem;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% 100%;
  }
}
</style>

