<template>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      :width="icon && old ? '45' : icon ? '75' : '113.06'"
      :height="icon && old ? '45' : icon ? '45' : '33'"
      :viewBox="icon && old ? '0 0 45 45' : icon ? '0 0 179.58 108.8' : '0 0 113.06 33'">
      <defs v-if="!icon">
        <linearGradient id="colorful" x1="1623.97" y1="1918.5" x2="1737.03" y2="1918.5" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#fc644c"/>
          <stop offset="0.14" stop-color="#ff9f2d"/>
          <stop offset="0.29" stop-color="#fe97c4"/>
          <stop offset="0.43" stop-color="#f92773"/>
          <stop offset="0.57" stop-color="#c568ba"/>
          <stop offset="0.71" stop-color="#3c79c7"/>
          <stop offset="0.86" stop-color="#74d3dd"/>
          <stop offset="1" stop-color="#a4f69b"/>
        </linearGradient>
      </defs>
      <template v-if="icon && !old">
        <path id="Asyncy_logomark" data-name="Asyncy logomark" :class="`fill--${variant === 'colorful' ? 'primary' : variant}`" d="M177,21.87c-7.8-8.57-33.3-8.92-64.7-2.2l.7,1.42.7,1.41c14.12-3,27.05-4.51,37.5-4.51,11.52,0,20,1.88,23.62,5.86a6.44,6.44,0,0,1,1.49,6.29c-2.28,9.23-18.58,21.72-42.24,33.09-1.49.7-3,1.43-4.59,2.13-6.58,3-13.66,5.92-21.11,8.65l-.15.06c-1.61.58-3.2,1.15-4.81,1.7a312.59,312.59,0,0,1-32,9.25c-2.15.49-4.27,1-6.37,1.39a208.34,208.34,0,0,1-27.57,4c-2,.14-3.94.26-5.81.3-13.27.39-23.07-1.45-27-5.78a6.46,6.46,0,0,1-1.47-6.3C5.83,68,27.16,53,56.87,40.39l1-2,1-2C26.31,49.72,3.32,65.87.36,77.93a9.4,9.4,0,0,0,2.18,9c4.21,4.63,13.62,6.86,26.36,6.86h1.84c1.71,0,3.47-.1,5.3-.2a11.46,11.46,0,0,0,21.07,8.88L63.38,89.9c2.1-.41,4.21-.86,6.35-1.35a315,315,0,0,0,35.09-10.09c1.52-.53,3.07-1.08,4.62-1.65l.16-.06,12.88,25.74a11.39,11.39,0,0,0,10.23,6.31h0a11.44,11.44,0,0,0,10.23-16.56L130.87,68c1.56-.7,3.08-1.42,4.58-2.16,24.64-11.84,41.3-24.87,43.79-35A9.47,9.47,0,0,0,177,21.87Z"/>
        <path id="Asyncy_logomark_orbit" data-name="Asyncy logomark orbit" :class="`fill--${variant === 'colorful' ? 'primary' : variant}`" d="M67.59,81.44,89.78,37.06l16.53,33c.19-.06.41-.14.6-.22,7.47-2.74,14.37-5.58,20.66-8.45L110.66,27.63l-2-4L108,22.24l-.68-1.41L100,6.33a11.43,11.43,0,0,0-20.46,0L65.93,33.57l-1,1.94h0l-1,2-3,5.94L39.78,85.87A212.9,212.9,0,0,0,67.59,81.44Z"/>
      </template>
      <path v-else-if="icon && old" id="Asyncy_logomark_old" data-name="Asyncy logomark old" :class="`fill--${variant === 'colorful' ? 'primary' : variant}`" d="M1413.5,789.137l-17.77-35.522a4.734,4.734,0,0,0-8.47,0l-17.75,35.522a4.733,4.733,0,0,0,4.23,6.856h0a4.731,4.731,0,0,0,4.24-2.619l13.51-27.042,13.53,27.044a4.731,4.731,0,0,0,4.24,2.617h0A4.742,4.742,0,0,0,1413.5,789.137Z" transform="translate(-1369 -751)"/>
      <path v-else id="Asyncy_wordmark" data-name="Asyncy wordmark" :class="`fill--${variant}`" d="M1626.4,1926.86a1.248,1.248,0,0,1-1.17.82h0a1.265,1.265,0,0,1-1.16-1.72l8.59-22.73a1.892,1.892,0,0,1,1.77-1.23h0a1.888,1.888,0,0,1,1.76,1.23l8.59,22.73a1.265,1.265,0,0,1-1.16,1.72h0a1.248,1.248,0,0,1-1.17-.82l-8.02-21.64Zm23.61-12.77a2.221,2.221,0,0,0,1.09,1.95,9.813,9.813,0,0,0,2.65,1.17c1.04,0.31,2.07.61,3.1,0.91a5.486,5.486,0,0,1,2.62,1.63,4.416,4.416,0,0,1,1.07,3.09,4.667,4.667,0,0,1-1.82,3.81,7.286,7.286,0,0,1-4.71,1.47,8.026,8.026,0,0,1-4.42-1.17,6.565,6.565,0,0,1-2.02-2.01,1.157,1.157,0,0,1,.39-1.59l0.09-.05a1.12,1.12,0,0,1,1.51.38,4.492,4.492,0,0,0,1.33,1.27,5.763,5.763,0,0,0,3.12.82,5.644,5.644,0,0,0,2.96-.71,2.421,2.421,0,0,0,1.19-2.22,2.282,2.282,0,0,0-1.08-1.98,9.322,9.322,0,0,0-2.64-1.18l-3.1-.9a5.738,5.738,0,0,1-2.63-1.61,4.257,4.257,0,0,1-1.08-3.03,4.722,4.722,0,0,1,1.75-3.74,6.531,6.531,0,0,1,4.41-1.5,7.279,7.279,0,0,1,3.86,1,6.253,6.253,0,0,1,1.83,1.67,1.146,1.146,0,0,1-.36,1.65l-0.01.01a1.1,1.1,0,0,1-1.46-.29,4.383,4.383,0,0,0-3.86-1.7,4.718,4.718,0,0,0-2.66.74A2.386,2.386,0,0,0,1650.01,1914.09Zm27.38-4.75h0a1.193,1.193,0,0,1,1.1,1.63l-7.1,18.4a9.916,9.916,0,0,1-2.97,4.27,5.991,5.991,0,0,1-3.04,1.35,1.122,1.122,0,0,1-1.27-1.12h0a1.145,1.145,0,0,1,1.02-1.13c1.66-.21,2.97-1.48,3.91-3.82l0.46-1.18-7.34-16.75a1.172,1.172,0,0,1,1.06-1.65h0a1.148,1.148,0,0,1,1.05.69l6.45,14.55,5.58-14.48A1.165,1.165,0,0,1,1677.39,1909.34Zm13.05-.44a6.69,6.69,0,0,1,5.17,2.03,7.719,7.719,0,0,1,1.9,5.49v10.05a1.2,1.2,0,0,1-1.19,1.21h0a1.2,1.2,0,0,1-1.19-1.21v-10.05a5.377,5.377,0,0,0-1.28-3.82,4.773,4.773,0,0,0-3.63-1.36,5.634,5.634,0,0,0-4.22,1.67q-1.62,1.68-1.62,5.16v8.4a1.2,1.2,0,0,1-1.19,1.21h0a1.2,1.2,0,0,1-1.19-1.21v-15.92a1.2,1.2,0,0,1,1.19-1.21h0a1.2,1.2,0,0,1,1.19,1.21v1.65A6.639,6.639,0,0,1,1690.44,1908.9Zm20.09,19.22a9.062,9.062,0,0,1-6.78-2.77,9.987,9.987,0,0,1,0-13.68,9.614,9.614,0,0,1,11.58-1.47,7.745,7.745,0,0,1,2.52,2.44,1.153,1.153,0,0,1-.38,1.62h0a1.13,1.13,0,0,1-1.51-.35,5.652,5.652,0,0,0-1.81-1.69,7.129,7.129,0,0,0-8.67,1.13,7.48,7.48,0,0,0,0,10.31,6.947,6.947,0,0,0,10.61-.65,1.107,1.107,0,0,1,1.46-.28l0.06,0.03a1.17,1.17,0,0,1,.35,1.67,8.463,8.463,0,0,1-2.63,2.41A9.322,9.322,0,0,1,1710.53,1928.12Zm25.28-18.78h0.04a1.177,1.177,0,0,1,1.08,1.6l-7.11,18.43a9.916,9.916,0,0,1-2.97,4.27,5.991,5.991,0,0,1-3.04,1.35,1.122,1.122,0,0,1-1.27-1.12h0a1.144,1.144,0,0,1,1.01-1.13q2.505-.315,3.92-3.82l0.46-1.18-7.34-16.75a1.172,1.172,0,0,1,1.06-1.65h0a1.158,1.158,0,0,1,1.05.69l6.44,14.55,5.59-14.5A1.148,1.148,0,0,1,1735.81,1909.34Z" transform="translate(-1623.97 -1902)"/>
    </svg>
</template>

<script>
export default {
  name: 'a-logo',
  props: {
    variant: {
      type: String,
      default: 'colorful',
      description: 'color of the logo (default: colorful)'
    },
    icon: {
      type: Boolean,
      default: false,
      description: 'Icon logo'
    },
    old: {
      type: Boolean,
      default: false,
      description: 'Icon old logo'
    }
  }
}
</script>

<style lang="scss" scoped>
.fill--colorful {
  fill-rule: evenodd;
  fill: url(#colorful) state(primary);
}

@each $color, $value in $colors {
  .fill--#{$color} {
    fill: #{$value};
    fill-rule: evenodd;
  }
}
@each $state, $value in $states {
  .fill--#{$state} {
    fill: #{$value};
    fill-rule: evenodd;
  }
}
</style>
