<template>
  <div class="snippet">
    <div class="snippet-code" v-bind:class="[
      {[`snippet-${effect}`]: effect},
      {'snipppet-transparent': transparent},
      {[`bg-${type}`]: type},
      {'rounded': round},
      {[`snippet-${size}`]: size},
      {'snippet-center': center},
      {'snippet-fixed-height': fixedHeight}
    ]">
      <div class="snippet-prepend">
        <slot name="snippet-prepend">
          <div class="snippet-text" v-bind:class="prependClasses">{{prependText}}</div>
        </slot>
      </div>
      <div class="snippet-body">
        {{value}}
      </div>
      <div class="snippet-append">
        <slot name="snippet-append">
          <div class="snippet-text" v-bind:class="appendClasses">{{appendText}}</div>
        </slot>
      </div>
    </div>
    <div class="copy-btn-container">
      <a-button type="neutral"
        class="snippet-button shadow"
        ref="copyBtn"
        size="sm"
        title="Copied!"
        @click="doCopy"
      >
        Copy
      </a-button>
      <a-tooltip :show.sync="bShowTooltip"
        :target="() => $refs.copyBtn"
        placement="bottom"
        title="Copied!"
        triggers="click blur">
      </a-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  name: 'a-snippet',
  props: {
    type: {
      String,
      default: 'default',
      description: 'Snippet type(e.g default, primary etc)'
    },
    effect: {
      type: String,
      default: 'dark',
      description: 'Effect of the snippet (light|dark)'
    },
    round: {
      type: Boolean,
      default: false,
      description: 'Whether snippet has rounded corners'
    },
    transparent: {
      type: Boolean,
      default: false,
      description: 'Whether snippet is transparent'
    },
    prependText: {
      type: String,
      default: '',
      description: 'Pepend text of snippet'
    },
    prependClasses: {
      type: [String, Object],
      default: '',
      description: 'Prepend add-on classes for <span></span>'
    },
    appendText: {
      type: String,
      default: '',
      description: 'Append text of snippet'
    },
    appendClasses: {
      type: [String, Object],
      default: '',
      description: 'Append add-on classes for <span></span>'
    },
    center: {
      type: Boolean,
      default: true,
      description: 'Whether code snippet is centered'
    },
    size: {
      type: String,
      default: 'default',
      description: 'Size of the snippet (sm|default|lg}'
    },
    value: {
      type: String,
      default: '',
      description: 'The main code snippet text'
    },
    readOnly: {
      type: Boolean,
      default: true,
      description: 'Whether code snippet is read-only'
    },
    fixedHeight: {
      type: Boolean,
      default: true,
      description: 'Whether snippet has fixed'
    }
  },
  data () {
    return {
      bShowTooltip: false
    }
  },
  methods: {
    doCopy () {
      this.$copyText(this.value).then(function (e) {
        this.bShowTooltip = true

        // Hide tooltip after 2S
        setTimeout(function () {
          this.bShowTooltip = false
        }.bind(this), 2000)
      }.bind(this), function (e) {})
    }
  }
}
</script>

<style lang="scss" scoped>
.snippet {
  position: relative;
  display: flex;

  .snippet-code {
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    align-items: stretch;
    width: 100%;
    overflow-x: auto;

    &.rounded {
      border-radius: 0.25rem;
    }

    .snippet-text {
      display: flex;
      align-items: center;
      padding: 0.65rem 0.75rem;
      margin-bottom: 0;
      font-weight: 400;
      line-height: 1.5;
      text-align: center;
      white-space: nowrap;
    }

    .snippet-prepend,
    .snippet-append {
      display: flex;
      color: $green;
    }

    .snippet-prepend {
      margin-right: -1px;
    }

    .snippet-append {
      margin-left: -1px;
    }

    .snippet-body {
      position: relative;
      flex: 1 1 auto;
      width: 1%;
      margin-bottom: 0;
      display: flex;
      padding: 0.375rem 0;
      line-height: 1.5;
      background: transparent;
      border: none;
      align-items: center;
      font-size: inherit;
    }

    &.snippet-light {
      background: white;

      .snippet-body {
        color: $snippet-light-color;
      }
    }

    &.snippet-dark {
      background: black;

      .snippet-body {
        color: $snippet-dark-color;
      }
    }

    &.snippet-transparent {
      background: transparent;
    }

    &.snippet-center {
      align-items: center;

      .snippet-body {
        flex: unset;
        width: unset;
      }
    }

    &.snippet-sm {
      font-size: $snippet-font-size-sm;
    }

    &.snippet-default {
      font-size: $snippet-font-size;
    }

    &.snippet-lg {
      font-size: $snippet-font-size-lg;
    }

    &.snippet-fixed-height {
      flex-shrink: 0;

      .snippet-prepend,
      .snippet-append,
      .snippet-body {
        flex-shrink: 0;
      }
    }
  }

  .copy-btn-container {
    position: absolute;
    margin-top: 50%;
    bottom: -15px;
    right: 10%;
  }
}
</style>
