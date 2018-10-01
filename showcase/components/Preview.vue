<template>
  <div>
    <div>
      <slot></slot>
    </div>
    <pre v-html="$slots.default[0]"></pre>
  </div>
</template>

<script>
export default {
  name: 'preview',
  components: {}
  // beforeMount () {
  //   this.$slots.default.forEach(vnode => {
  //     console.log(vnode)
  //   })
  // }
}
</script>

<style lang="scss" scoped>
</style>
