<template>
  <a class="link" @click="handleClick" :href="href" :target="target ? target : false" v-bind:class="{
    [`link--${state}`]: state,
  }">
    <span v-if="$slots.icon">
      <slot name="icon"></slot>
    </span>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </a>
</template>

<script>
export default {
  name: 'a-button',
  props: {
    state: {
      type: String,
      default: 'default',
      description: 'Button type (e,g primary, danger etc)'
    },
    href: {
      type: String,
      default: '#',
      description: 'Link href'
    },
    target: {
      type: String,
      default: '',
      description: 'Link target'
    },
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

<style lang="scss" scoped>
.link {
  font-size: fontSize(m);

  span + span {
    margin-left: 0.75em;
  }

  @each $state, $value in $states {
    &.link--#{$state} {
      color: $value;
    }
  }
}
</style>
