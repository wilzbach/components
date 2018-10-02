<template>
  <div class="categories" :class="{}">
    <a href="#" class="categories__item mb-2" v-for="(item, index) in items" :class="{'--is-active': index === active}" :key="index">
      <span v-if="item.icon">
        <i :class="item.icon"></i>
      </span>
      <span>{{item.name}}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'a-categories',
  props: {
    items: {
      type: Array,
      default: [{}],
      description: ''
    },
    active: {
      type: Number,
      default: 0,
      description: ''
    }
  }
}
</script>

<style lang='scss'>
.categories__item {
  position: relative;
  display: flex;
  padding: 0.5rem 1rem;
  margin-left: -2rem;
  border-radius: 0.5rem;
  overflow: hidden;
  transition: all duration(s) $easing;

  &:after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 3px;
  }

  &.--is-active {
    color: state(primary);
    border-color: state(primary);
    box-shadow: shadow(base);

    @include hover {
      box-shadow: shadow(base, hover);
    }

    &:after {
      background-color: state(primary);
    }
  }

  @include hover {
    color: state(primary);
  }
}
</style>
