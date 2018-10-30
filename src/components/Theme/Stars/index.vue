<template>
  <svg
    id="stars"
    ref="stars"
    :class="{ absolute: absolute, fixed: fixed }"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    xml:space="preserve">
    <StarOne />
    <StarTwo />
    <StarThree />
    <StarFour />
    <g>
      <template v-for="star of stars">
        <template v-for="(s, index) of star.items">
          <use
            v-if="(s.mobile && clientWidth > 600) || !s.mobile"
            :key="`star-${star.model}-${index}`"
            :xlink:href="`#${star.model}`"
            :width="star.width"
            :height="star.height"
            :x="`${s.x}%`"
            :y="`${s.y}%`" />
        </template>
      </template>
    </g>
  </svg>
</template>

<script>
import StarOne from './One'
import StarTwo from './Two'
import StarThree from './Three'
import StarFour from './Four'

export default {
  name: 'Stars',
  components: { StarOne, StarTwo, StarThree, StarFour },
  props: {
    absolute: {
      type: Boolean,
      default: false,
      description: 'Put the svg as absolute'
    },
    fixed: {
      type: Boolean,
      default: false,
      description: 'Put the svg as fixed'
    },
    animated: {
      type: Boolean,
      default: false,
      description: 'Follow the mouse to animate the stars'
    }
  },
  data: () => ({
    mouseX: 0,
    mouseY: 0,
    clientWidth: 0,
    clientHeight: 0,
    stars: [{
      model: 'star_1',
      width: 10,
      height: 10,
      items: [
        { x: 21, y: 42 },
        { x: 8, y: 25 },
        { x: 67, y: 54, mobile: true },
        { x: 95, y: 78, mobile: true },
        { x: 83, y: 17, mobile: true },
        { x: 3, y: 6, mobile: true },
        { x: 70, y: 23, mobile: true }
      ]
    }, {
      model: 'star_2',
      width: 35,
      height: 35,
      items: [
        { x: 72, y: 57 },
        { x: 85, y: 53, mobile: true },
        { x: 14, y: 54, mobile: true },
        { x: 65, y: 73 },
        { x: 96, y: 64, mobile: true },
        { x: 17, y: 37, mobile: true },
        { x: 23, y: 74, mobile: true },
        { x: 84, y: 5, mobile: true },
        { x: 52, y: 20 },
        { x: 24, y: 15, mobile: true }
      ]
    }, {
      model: 'star_3',
      width: 30,
      height: 30,
      items: [
        { x: 90, y: 67 },
        { x: 10, y: 90 },
        { x: 80, y: 30 },
        { x: 32, y: 22, mobile: true },
        { x: 7, y: 74, mobile: true },
        { x: 82.4, y: 43, mobile: true },
        { x: 71, y: 47, mobile: true },
        { x: 6, y: 12, mobile: true },
        { x: 65, y: 52, mobile: true }
      ]
    }, {
      model: 'star_4',
      width: 10,
      height: 10,
      items: [
        { x: 6, y: 96 },
        { x: 90, y: 34 },
        { x: 52, y: 22, mobile: true },
        { x: 48, y: 34, mobile: true },
        { x: 12, y: 47, mobile: true },
        { x: 89, y: 49, mobile: true },
        { x: 70, y: 20, mobile: true },
        { x: 87, y: 34, mobile: true },
        { x: 90, y: 12, mobile: true },
        { x: 72, y: 52, mobile: true }
      ]
    }]
  }),
  mounted: function () {
    if (this.animated) {
      window.addEventListener('mousemove', this.starsMove)
      window.addEventListener('resize', this.starsMove)
    }
    this.starsMove({ type: 'init' })
  },
  beforeDestroy: function () {
    if (this.animated) {
      window.removeEventListener('mousemove', this.starsMove)
      window.removeEventListener('resize', this.starsMove)
    }
  },
  methods: {
    starsMove: function (event) {
      if (event && event.type === 'mousemove') {
        this.mouseX = event.clientX
        this.mouseY = event.clientY
      } else if (event && (event.type === 'resize' || event.type === 'init')) {
        this.clientHeight = this.$el.clientHeight
        this.clientWidth = this.$el.clientWidth
      }
      if (event && event.type !== 'init') {
        this.$nextTick(() => {
          let tx = -((this.clientWidth / 2 - event.clientX) / 30)
          let ty = -((this.clientHeight / 2 - event.clientY) / 30)
          this.$el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#stars {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-height: 100%;
  min-width: 100%;
  &.fixed {
    position: fixed;
  }
  &.absolute {
    position: absolute;
  }
}
</style>
