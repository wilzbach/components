<template>
  <nav
    class="navbar"
    :class="[
      {'expand-lg': expand},
      {[`navbar-${effect}`]: effect},
      {'transparent': transparent},
      {[`bg--${type}`]: type && !transparent },
      {'rounded': round}
    ]">
    <div
      class="container"
      v-click-outside="close">
      <span
        class="navbar-brand"
        @click.prevent="onBrandClick">
        {{title}}
        <a-logo
          v-if="logo"
          icon
          :variant="logo" />
        <div v-if="tag">
          <a-badge
            :state="tagState"
            lower>{{ tag }}</a-badge>
        </div>
      </span>
      <a-navbar-toggle-button
        v-if="items && items.length > 0"
        :toggled="toggled"
        :target="contentId"
        @click.native.stop="toggled = !toggled"
        :dark="effect !== 'dark'" />
      <transition name="navbar-collapse">
        <div
          class="navbar-collapse"
          v-show="toggled"
          :id="contentId">
          <div class="navbar-collapse-header">
            <div class="collapse-brand">
              <router-link to="/">Asyncy</router-link>
            </div>
            <div class="collapse-close">
              <a-close-button
                :target="contentId"
                @click="close" />
            </div>
          </div>
          <transition name="fade">
            <div
              v-if="hasSearch"
              class="column align-center is-hidden-mobile search-container">
              <form
                class="header-form"
                @submit.prevent="onSearch">
                <a-input
                  placeholder="Search"
                  v-model="search"
                  class="header-search-bar"
                  :input-classes="searchColor ? `text--${searchColor}` : 'text--light'" />
              </form>
            </div>
          </transition>
          <ul
            v-if="(items && items.length > 0) || ($slots && $slots.default)"
            class="navbar-nav">
            <a-nav-item
              v-for="(item, idx) of items"
              :key="`nav-${id}-list-items-${idx}`"
              :name="item.name"
              :children="item.children"
              :icon="item.icon"
              :iconRight="item.iconRight"
              :link="item.link"
              :external="item.external"
              :hideDecoration="item.hideDecoration"
              :color="item.color"
              :dark="effect === 'dark'"
              :right="item.right"
              :button="item.button"
              :outline="item.outline"
              @itemClicked="$emit(item.emit, { id, name: item.name, link: item.link })" />
            <slot />
          </ul>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script>
import aNavbarToggleButton from './NavbarToggleButton.vue'
import aCloseButton from './CloseButton.vue'
import aNavItem from './NavItem'

export default {
  name: 'a-nav',
  components: {
    aNavbarToggleButton,
    aCloseButton,
    aNavItem
  },
  props: {
    type: {
      type: String,
      default: 'primary',
      description: 'Navbar type (e.g default, primary etc)'
    },
    id: {
      type: [String, Number],
      default: Math.random().toString(),
      description: 'Explicit id for the nav. By default it\'s a generated random number'
    },
    title: {
      type: String,
      default: '',
      description: 'Title of navbar'
    },
    logo: {
      type: String,
      default: undefined,
      description: 'Logo of navbar. If defined, the value is the color of the logo (state|color)'
    },
    contentId: {
      type: [String, Number],
      default: Math.random().toString(),
      description:
        "Explicit id for the menu. By default it's a generated random number"
    },
    effect: {
      type: String,
      default: 'dark',
      description: 'Effect of the navbar (light|dark)'
    },
    round: {
      type: Boolean,
      default: false,
      description: 'Whether nav has rounded corners'
    },
    transparent: {
      type: Boolean,
      default: false,
      description: 'Whether navbar is transparent'
    },
    expand: {
      type: Boolean,
      default: false,
      description: 'Whether navbar should contain `navbar-expand-lg` class'
    },
    tag: {
      type: String,
      default: undefined,
      description: 'Whether navbar should show a badge with the tag text'
    },
    tagState: {
      type: String,
      default: 'primary',
      description: 'The state color of the tag. Default: primary'
    },
    items: {
      type: Array,
      default: () => ([]),
      description: "Items to display in the menu. e.g.: { name: 'Item', link: '/', icon: 'fa fa-icon', iconRight: 'fa fa-icon', right: /* dropdown-menu-right */true, children: [{ name: 'Sub', link: '/' }, { type: 'divider' }], hideDecoration: true, color: '(primary|pink|...)' }"
    },
    hasSearch: {
      type: Boolean,
      default: false,
      description: 'Add a search bar on the navbar (get the input at @search="function (query) {}" event)'
    },
    searchColor: {
      type: String,
      default: undefined,
      description: 'Change the search input color (default: light)'
    }
  },
  data: () => ({
    toggled: false,
    search: ''
  }),
  methods: {
    onBrandClick: function (evt) {
      this.$emit('brand-click', evt)
    },
    close: function () {
      this.toggled = false
    },
    onSearch: function () {
      console.log(this.search)
      this.$emit('search', this.search)
    }
  }
}
</script>

<style lang="scss">
.navbar {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  z-index: 1000;
  &.rounded {
    border-radius: 0.25rem;
  }
  &.expand-lg {
    @include breakpoint(m) {
      flex-flow: row nowrap;
      justify-content: flex-start;
    }
  }
  .container {
    position: relative;
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
    max-width: 1440px;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    @include breakpoint(m) { flex-wrap: nowrap; }

    .search-container {
      padding: 0;
      @include breakpoint(m) {
        margin-left: 50px;
      }

      .header-search-bar {
        width: 250px;
        @include breakpoint(max m) {
          width: 100%;
        }
        .form-control {
          @include breakpoint(max m) {
            color: color(dark) !important;
          }
        }
      }
    }

    .navbar-brand {
      color: $white;
      margin-left: 1rem;
      font-weight: 600;
      text-transform: uppercase;
      font-size: .875rem;
      letter-spacing: .05px;
      margin-right: 1rem;
      line-height: inherit;
      white-space: nowrap;
      display: flex;
      align-items: center;
      text-decoration: none;
      cursor: pointer;
      svg {
        height: 2rem;
      }
      div {
        margin-left: 1rem;
        span {
          color: color(light);
        }
      }
    }
    .navbar-toggler {
      @include breakpoint(m) { display: none; }
    }
    .navbar-collapse {
      flex-basis: 100%;
      align-items: center;
      flex-grow: 1;
      @include breakpoint(m) { display: flex !important; flex-basis: auto; }
      @include breakpoint((max, m)) {
        padding: 1.5rem;
        border-radius: 0.25rem;
        background: $white;
        box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1), 0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
        width: calc(100% - 1.4rem);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1001;
        margin: .7rem;
        overflow-y: auto;
        height: auto !important;
        opacity: 1;
      }
      .navbar-collapse-header {
        display: flex;
        @include breakpoint(m) { display: none; }
        justify-content: space-between;
        padding-bottom: 1rem;
        margin-bottom: 1rem;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        .collapse-brand {
          a {
            text-decoration: none;
            color: color(dark);
          }
          svg {
            height: 36px;
          }
        }
        .collapse-close {
          text-align: right;
        }
      }
    }
    .navbar-nav {
      display: flex;
      flex-direction: column;
      list-style: none;
      margin: 0;
      @include breakpoint(m) { flex-direction: row; margin-left: auto; }
      @include breakpoint((max, m)) { padding-left: 0; }
    }
  }
}

.navbar-collapse-enter, .navbar-collapse-enter-active {
  animation: show-navbar-collapse .2s ease forwards;
}

.navbar-collapse-leave-active, .navbar-collapse-leave-to {
  animation: hide-navbar-collapse .2s ease forwards;
}

@keyframes show-navbar-collapse {
    0% {
        opacity: 0;
        transform: scale(.95);
        transform-origin: 100% 0;
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes hide-navbar-collapse {
    from {
        opacity: 1;
        transform: scale(1);
        transform-origin: 100% 0;
    }

    to {
        opacity: 0;
        transform: scale(.95);
    }
}
</style>
