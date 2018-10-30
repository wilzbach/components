<template>
  <div
    v-if="variant"
    :class="['asset', variant]"
    :style="{ width, height }" />
</template>

<script>
export default {
  name: 'Asset',
  props: {
    variant: {
      type: String,
      default: undefined,
      description: 'The asset variant. (book)',
      validator: v => ['book'].includes(v)
    },
    width: {
      type: String,
      default: undefined,
      description: 'The asset width (inject inline style)'
    },
    height: {
      type: String,
      default: undefined,
      description: 'The asset height (inject inline style)'
    }
  }
}
</script>

<style lang="scss" scoped>
.asset {
  display: block;
  position: relative;
  width: 4rem;
  height: 4rem;
  &.book {
    background-image: url('../../assets/img/book.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
  }
}
</style>
