<template>
  <component v-bind:is="tag" class="badge" v-bind:class="
                 [`badge-${type}`,
                  rounded ? `badge-pill` : '',
                  circle && 'badge-circle'
                 ]">
    <slot>
      <i v-if="icon" v-bind:class="icon"></i>
    </slot>
  </component>
</template>

<script>
export default {
  name: 'a-badge',
  props: {
    tag: {
      type: String,
      default: 'span',
      description: 'Html tag to use for the badge.'
    },
    rounded: {
      type: Boolean,
      default: false,
      description: 'Whether badge is of pill type'
    },
    circle: {
      type: Boolean,
      default: false,
      description: 'Whether badge is circle'
    },
    icon: {
      type: String,
      default: '',
      description: 'Icon name. Will be overwritten by slot if slot is used'
    },
    type: {
      type: String,
      default: 'default',
      description: 'Badge type (primary|info|danger|default|warning|success)'
    }
  }
}
</script>

<style lang='scss'>
.badge {
  text-transform: $badge-text-transfom;

  a {
    color: #fff;
  }
}

.badge + .badge {
  margin-left: 3px;
}

// Variations
.badge-pill {
  padding-right: $badge-pill-padding-x;
  padding-left: $badge-pill-padding-x;
}

.badge-circle {
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  font-size: 0.875rem;
}

// Multiple inline badges
.badge-inline {
  margin-right: 0.625rem;
}

.badge-inline + span {
  top: 2px;
  position: relative;
}

.badge-inline + span > a {
  text-decoration: underline;
}

// Sizes
.badge-md {
  padding: 0.65em 1em;
}

.badge-lg {
  padding: 0.85em 1.375em;
}

// Color variations

.badge-secondary {
  color: $gray-800;
}

// Link badges

.btn {
  .badge {
    &:not(:first-child) {
      margin-left: 0.5rem;
    }
    &:not(:last-child) {
      margin-right: 0.5rem;
    }
  }
}
</style>
