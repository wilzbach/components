<template>
  <div class="tab-pane"
       :id="title"
       v-show="active"
       :aria-expanded="active">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'a-tab-pane',
  props: {
    title: {
      type: String,
      required: true,
      description: 'Tab title'
    },
    icon: {
      type: String,
      default: undefined,
      description: 'Tab title icon'
    }
  },
  inject: ['addTab', 'removeTab'],
  data: () => ({
    active: false
  }),
  mounted: function () {
    this.addTab(this)
  },
  destroyed: function () {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
    this.removeTab(this)
  }
}
</script>