<template>
  <div class="card" :class="{
      shadow,
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
      description: 'Card background state'
    },
    gradient: {
      type: Boolean,
      default: false,
      description: 'Card background gradient based on state'
    },
    shadow: {
      type: Boolean,
      description: 'Whether card has shadow'
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  padding: 0.75rem;
  border-radius: 0.25rem;

  &.shadow {
    box-shadow: $box-shadow;
  }
}
</style>
