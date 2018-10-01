<template>
  <div>
    <div>
      <slot></slot>
    </div>
    <!-- <div v-for="slot in $slots.default" :key="slot">
      <div>{{ slot }}</div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'preview',
  components: {}
}
</script>

<style lang="scss" scoped>
</style>
