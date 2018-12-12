<template>
  <div class="step"
       :id="title"
       v-show="active"
       :aria-expanded="active">
    <slot v-if="false" name="header" />
    <slot />
  </div>
</template>

<script>
export default {
  name: 'aStep',
  props: {
    title: {
      type: String,
      required: false,
      description: 'Step title'
    },
    icon: {
      type: String,
      default: undefined,
      description: 'Step title icon'
    }
  },
  inject: ['addStep', 'removeStep'],
  data: () => ({
    active: false
  }),
  mounted: function () {
    this.addStep(this, this.$slots.header)
  },
  destroyed: function () {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
    this.removeStep(this)
  }
}
</script>
