<template>
  <div class="card" :class="{
      shadow,
      light: light,
      [`bg${gradient ? '-gradient' : ''}--${state}`]: state
    }">
    <div class="card-header" v-if="$slots.header">
      <slot name="header" />
    </div>
    <div class="card-body">
      <slot />
    </div>
    <div class="card-footer" v-if="$slots.footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'a-card',
  props: {
    state: {
      type: String,
      default: undefined,
      description: 'Card background state'
    },
    gradient: {
      type: Boolean,
      default: false,
      description: 'Card background gradient based on state'
    },
    shadow: {
      type: Boolean,
      default: false,
      description: 'Whether card has shadow'
    },
    light: {
      type: Boolean,
      default: false,
      description: 'Whether card has shadow'
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  padding: 0;
  border-radius: 0.25rem;
  width: 100%;
  min-height: 100px;
  &:not(.shadow):not(.light) {
    border: 1px solid gray(200);
  }

  .card-body {
    padding: 0.75rem;
    position: relative;
    width: 100%;
    height: 100%;
    display: inline-block;
  }

  .card-header, .card-footer {
    padding: 0.75rem;
    background-color: gray(200);
  }

  &.shadow {
    box-shadow: shadow(card);
  }
}
</style>
