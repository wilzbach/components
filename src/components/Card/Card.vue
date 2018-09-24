<template>
    <div class="card"
         v-bind:class="[
         {'card-lift--hover': hover},
         {'shadow': shadow},
         {[`shadow-${shadowSize}`]: shadowSize},
         {[`bg-gradient-${gradient}`]: gradient},
         {[`bg-${type}`]: type}
       ]">
        <div class="card-header" v-bind:class="headerClasses" v-if="$slots.header">
            <slot name="header">
            </slot>
        </div>
        <div class="card-body" v-bind:class="bodyClasses" v-if="!noBody">
            <slot></slot>
        </div>

        <slot v-if="noBody"></slot>

        <div class="card-footer" v-bind:class="footerClasses" v-if="$slots.footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>
<script>
export default {
  name: 'a-card',
  props: {
    type: {
      type: String,
      description: 'Card type'
    },
    gradient: {
      type: String,
      description: 'Card background gradient type (warning,danger etc)'
    },
    hover: {
      type: Boolean,
      description: 'Whether card should move on hover'
    },
    shadow: {
      type: Boolean,
      description: 'Whether card has shadow'
    },
    shadowSize: {
      type: String,
      description: 'Card shadow size'
    },
    noBody: {
      type: Boolean,
      default: false,
      description: 'Whether card should have wrapper body class'
    },
    bodyClasses: {
      type: [String, Object, Array],
      description: 'Card body css classes'
    },
    headerClasses: {
      type: [String, Object, Array],
      description: 'Card header css classes'
    },
    footerClasses: {
      type: [String, Object, Array],
      description: 'Card footer css classes'
    }
  }
}
</script>
<style lang="scss" scoped>
.card {
  position: relative;
}

.profile-page {
  .card-profile {
    margin-top: -150px;

    .card-profile-image {
      position: relative;
      //min-height: 130px;

      img {
        max-width: 180px;
        border-radius: $border-radius;
        box-shadow: $box-shadow;
        transform: translate(-50%, -30%);
        position: absolute;
        left: 50%;
        transition: $transition-base;

        &:hover {
          transform: translate(-50%, -33%);
        }
      }
    }

    .card-profile-stats {
      padding: 1rem 0;

      > div {
        text-align: center;
        margin-right: 1rem;
        padding: 0.875rem;

        &:last-child {
          margin-right: 0;
        }

        .heading {
          font-size: 1.1rem;
          font-weight: bold;
          display: block;
        }
        .description {
          font-size: 0.875rem;
          color: $gray-500;
        }
      }
    }

    .card-profile-actions {
      padding: 0.875rem;
    }

    @include media-breakpoint-down(xs) {
      .card-profile-actions {
        margin-top: 110px;
      }
    }

    @include media-breakpoint-between(sm, md) {
      .card-profile-stats {
        margin-top: 30px;
      }
    }
  }
}

// Card with blockquotes

.card {
  .card-blockquote {
    padding: 2rem;
    position: relative;

    .svg-bg {
      display: block;
      width: 100%;
      height: 95px;
      position: absolute;
      top: -94px;
      left: 0;
    }
  }
}

// Animated cards

.card-lift--hover {
  &:hover {
    transform: translateY(-20px);
    @include transition($transition-base);
  }
}
</style>
