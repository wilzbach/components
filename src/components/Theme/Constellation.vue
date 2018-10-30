<template>
  <svg
    :class="['constellation', size]"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    :viewBox="getViewBox">
    <defs>
      <radialGradient id="constellation-rg" cx="25.62" cy="25.62" r="25.62" gradientUnits="userSpaceOnUse">
        <stop offset="0.17" stop-color="#c5c9df"/>
        <stop offset="0.19" stop-color="#bdc1d6" stop-opacity="0.95"/>
        <stop offset="0.29" stop-color="#9396a8" stop-opacity="0.7"/>
        <stop offset="0.39" stop-color="#6f7282" stop-opacity="0.48"/>
        <stop offset="0.48" stop-color="#545664" stop-opacity="0.32"/>
        <stop offset="0.57" stop-color="#40424f" stop-opacity="0.2"/>
        <stop offset="0.64" stop-color="#343642" stop-opacity="0.13"/>
        <stop offset="0.69" stop-color="#30323d" stop-opacity="0.1"/>
      </radialGradient>
      <symbol id="constellation_star" data-name="constellation_star" viewBox="0 0 51.24 51.24">
        <circle class="cls-1" cx="25.62" cy="25.62" r="25.62"/>
        <circle class="cls-2" cx="25.62" cy="25.62" r="4.32"/>
      </symbol>
    </defs>
    <g>
      <g>
        <polyline
          v-if="getPolyline"
          class="cls-3"
          :points="getPolyline" />
        <line
          v-if="getLine"
          class="cls-3"
          :x1="getLine.x1"
          :y1="getLine.y1"
          :x2="getLine.x2"
          :y2="getLine.y2" />
      </g>
      <g>
        <use
          v-for="(s, index) of getStars"
          :key="`star-${_uid}-${index}`"
          width="51.24"
          height="51.24"
          :transform="s"
          xlink:href="#constellation_star" />
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'Constellation',
  props: {
    type: {
      type: String,
      default: 'a',
      description: 'The constellation type (a|b|c) default: a',
      validator: v => ['a', 'b', 'c'].includes(v)
    },
    size: {
      type: String,
      default: 'auto',
      description: 'Size of the constellation: (auto|s|m|l)'
    }
  },
  computed: {
    getViewBox: function () {
      return this.types[this.type].viewBox
    },
    getPolyline: function () {
      return this.types[this.type].constellation.polyline
    },
    getLine: function () {
      return this.types[this.type].constellation.line
    },
    getStars: function () {
      return this.types[this.type].stars
    }
  },
  data: () => ({
    types: {
      a: {
        viewBox: '0 0 143.8 164.45',
        constellation: { polyline: '131.39 152.03 107.75 12.18 15.92 117' },
        stars: ['translate(0 101.18) scale(0.62)', 'translate(118.99 139.64) scale(0.48)', 'translate(95.56) scale(0.48)']
      },
      b: {
        viewBox: '0 0 328.24 319.61',
        constellation: { polyline: '261.46 112.77 263.09 9.23 141.81 74.36 261.46 112.77 238.25 220.68 110.37 292.42 16.42 148.55', line: { x1: '319.4', y1: '310.77', x2: '238.25', y2: '220.68' } },
        stars: ['translate(224.78 207.22) scale(0.53)', 'translate(0 132.14) scale(0.64)', 'translate(251.83 103.14) scale(0.38)', 'translate(92.67 274.74) scale(0.69)', 'translate(129.41 61.97) scale(0.48)', 'translate(310.58 301.96) scale(0.34)', 'translate(253.85) scale(0.36)']
      },
      c: {
        viewBox: '0 0 282.83 237.28',
        constellation: { polyline: '14.92 154.88 185.6 228.25 271.49 170.16 134.55 117.88 172.65 13.46', line: { x1: '134.55', y1: '117.88', x2: '14.92', y2: '154.88' } },
        stars: ['translate(159.18) scale(0.53)', 'translate(260.16 158.85) scale(0.44)', 'translate(120.6 103.94) scale(0.54)', 'translate(176.58 219.24) scale(0.35)', 'translate(0 139.92) scale(0.59)']
      }
    }
  })
}
</script>

<style lang="scss" scoped>
.cls-1 {
  opacity: 0.4;
  fill: url(#constellation-rg);
}
.cls-2 {
  fill: #fff;
  fill-opacity: 0.6;
}
.cls-3 {
  fill: none;
  stroke: #455966;
  stroke-miterlimit: 10;
  stroke-width: 2px;
  opacity: 0.6;
}
.constellation {
  &.auto {
    width: auto;
    height: auto;
  }
  &.s {
    width: 4rem;
    height: 4rem;
  }
  &.m {
    width: 6rem;
    height: 6rem;
  }
  &.l {
    width: 8rem;
    height: 8rem;
  }
}
</style>
