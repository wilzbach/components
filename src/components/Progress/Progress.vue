<template>
  <div class="progress-wrapper">
    <div v-bind:class="`progress-${type}`">
      <div class="progress-label">
        <slot name="label">
          <span>{{label}}</span>
        </slot>
      </div>
      <div class="progress-percentage">
        <slot>
          <span>{{value}}%</span>
        </slot>
      </div>
    </div>
    <div class="progress" :style="`height: ${height}px`">
      <div class="progress-bar"
           v-bind:class="computedClasses"
           role="progressbar"
           :aria-valuenow="value"
           aria-valuemin="0"
           aria-valuemax="100"
           v-bind:style="`width: ${value}%;`">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'a-progress',
  props: {
    striped: {
      type: Boolean,
      description: 'Whether progress is striped'
    },
    animated: {
      type: Boolean,
      description:
        'Whether progress is animated (works only with `striped` prop together)'
    },
    label: {
      type: String,
      description: 'Progress label (shown on the left above progress)'
    },
    height: {
      type: Number,
      default: 8,
      description: 'Progress line height'
    },
    type: {
      type: String,
      default: 'default',
      description: 'Progress type (e.g danger, primary etc)'
    },
    value: {
      type: Number,
      default: 0,
      validator: value => {
        return value >= 0 && value <= 100
      },
      description: 'Progress value'
    }
  },
  computed: {
    computedClasses () {
      return [
        { 'progress-bar-striped': this.striped },
        { 'progress-bar-animated': this.animated },
        { [`bg-${this.type}`]: this.type }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.progress-wrapper {
  position: relative;
  padding-top: 1.5rem;
}
.progress {
  height: 8px;
  margin-bottom: $spacer;
  overflow: hidden;
  border-radius: $border-radius-sm;
  background-color: $progress-bg;
  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
}
.progress .sr-only {
  width: auto;
  height: 20px;
  margin: 0 0 0 30px;
  left: 0;
  clip: auto;
  line-height: 20px;
  font-size: 13px;
}

.progress-heading {
  font-size: 14px;
  font-weight: 500;
  margin: 0 0 2px;
  padding: 0;
}
.progress-bar {
  box-shadow: none;
  border-radius: 0;
  height: auto;
}
.progress-info {
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.progress-label {
  span {
    display: inline-block;
    color: $primary;
    font-size: 0.625rem;
    font-weight: 600;
    text-transform: uppercase;
    background: rgba($primary, 0.1);
    padding: 0.25rem 1rem;
    border-radius: 30px;
  }
}

.progress-percentage {
  text-align: right;
  span {
    display: inline-block;
    color: $gray-600;
    font-size: 0.875rem;
    font-weight: 600;
  }
}
</style>
