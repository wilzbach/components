<template>
  <li
    class="nav-item"
    :class="children ? 'dropdown' : ''"
    v-click-outside="close">

    <span
      v-if="children"
      class="nav-link"
      :class="{
        [`text--${color}`]: color,
        [`bg--${color}--before`]: color,
        'hide-decoration': hideDecoration || !name,
        'dark': dark && !color
      }"
      :id="id"
      role="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      :aria-expanded="toggled"
      @click.stop="toggled = !toggled">
      <i
        v-if="icon"
        class="icon"
        :class="icon" />
      {{ name }}
      <i
        v-if="iconRight"
        class="icon right"
        :class="iconRight" />
    </span>
    <template v-else>
      <a-button
        v-if="button"
        @click="$emit('itemClicked')"
        class="nav-button"
        :state="button"
        :outline="outline">
        {{ name }}
      </a-button>
      <router-link
        v-else-if="!external"
        class="nav-link"
        :class="{
          [`text--${color}`]: color,
          [`bg--${color}--before`]: color,
          'hide-decoration': hideDecoration || !name,
          'dark': dark && !color
        }"
        :to="link">
        <font-awesome-icon
          v-if="icon && brands.includes(icon)"
          :icon="['fab', icon]" />
        <i
          v-else-if="icon"
          class="icon"
          :class="icon" />
        {{ name }}
        <font-awesome-icon
          v-if="iconRight && brands.includes(iconRight)"
          :icon="['fab', iconRight]" />
        <i
          v-else-if="iconRight"
          class="icon right"
          :class="iconRight" />
      </router-link>
      <a
        v-else
        class="nav-link"
        :class="{
          [`text--${color}`]: color,
          [`bg--${color}--before`]: color,
          'hide-decoration': hideDecoration || !name,
          'dark': dark && !color
        }"
        :href="link"
        :title="name"
        target="_blank">
        <font-awesome-icon
          v-if="icon && brands.includes(icon)"
          :icon="['fab', icon]" />
        <i
          v-else-if="icon"
          class="icon"
          :class="icon" />
        {{ name }}
        <font-awesome-icon
          v-if="iconRight && brands.includes(iconRight)"
          :icon="['fab', iconRight]" />
        <i
          v-else-if="iconRight"
          class="icon right"
          :class="iconRight" />
      </a>
    </template>

    <template v-if="children">
      <transition name="navbar-dropdown">
        <div
          class="dropdown-menu"
          :class="{'dropdown-menu-right': right, 'dark': dark}"
          :aria-labelledby="id"
          v-show="toggled">
          <template v-for="(child, idx) of children">
            <div
              v-if="child.type && child.type === 'divider'"
              class="dropdown-divider"
              :key="`dropdown-${id}-item-${idx}-divider`" />
            <template v-else>
              <router-link
                v-if="!child.external"
                :key="`dropdown-${id}-item-${idx}-name`"
                :to="child.link ? child.link : ''"
                class="dropdown-item">
                <font-awesome-icon
                  v-if="child.icon && brands.includes(child.icon)"
                  :icon="['fab', child.icon]" />
                <i
                  v-else-if="child.icon"
                  :key="`dropdown-${id}-item-${idx}-icon`"
                  class="icon"
                  :class="child.icon" />
                {{ child.name }}
                <font-awesome-icon
                  v-if="child.iconRight && brands.includes(child.iconRight)"
                  :icon="['fab', child.iconRight]" />
                <i
                  v-else-if="child.iconRight"
                  :key="`dropdown-${id}-item-${idx}-icon-right`"
                  class="icon right"
                  :class="child.iconRight" />
              </router-link>
              <a
                v-else
                :key="`dropdown-${id}-item-${idx}-name`"
                class="dropdown-item"
                :href="child.link"
                target="_blank"
                :title="child.name">
                <font-awesome-icon
                  v-if="child.icon && brands.includes(child.icon)"
                  :icon="['fab', child.icon]" />
                <i
                  v-else-if="child.icon"
                  :key="`dropdown-${id}-item-${idx}-icon`"
                  class="icon"
                  :class="child.icon" />
                {{ child.name}}
                <font-awesome-icon
                  v-if="child.iconRight && brands.includes(child.iconRight)"
                  :icon="['fab', child.iconRight]" />
                <i
                  v-else-if="child.iconRight"
                  :key="`dropdown-${id}-item-${idx}-icon-right`"
                  class="icon right"
                  :class="child.iconRight" />
              </a>
            </template>
          </template>
        </div>
      </transition>
    </template>
  </li>
</template>

<script>
export default {
  name: 'a-nav-item',
  props: {
    id: {
      type: [String, Number],
      default: Math.random().toString(),
      description: 'Explicit id for the dropdown menu. By default it\'s a generated random number'
    },
    children: {
      type: Array,
      default: () => undefined,
      description: 'Nav item children to generate dropdown'
    },
    name: {
      type: String,
      default: undefined,
      description: 'Nav item name'
    },
    color: {
      type: String,
      default: null,
      description: 'change color of nav-item'
    },
    hideDecoration: {
      type: Boolean,
      default: false,
      description: 'Remove the bottom decoration'
    },
    link: {
      type: [String, Object],
      default: '',
      description: 'Link of the navitem'
    },
    button: {
      type: String,
      default: undefined,
      description: 'If the item is a button'
    },
    outline: {
      type: Boolean,
      default: false,
      description: 'If the item is a button and if it should be outline'
    },
    external: {
      type: Boolean,
      default: false,
      description: 'Whether it is an external link'
    },
    icon: {
      type: String,
      default: undefined,
      description: 'Icon of the navitem'
    },
    iconRight: {
      type: String,
      default: undefined,
      description: 'Icon of the navitem'
    },
    dark: {
      type: Boolean,
      default: false,
      description: 'Dark theme'
    },
    right: {
      type: Boolean,
      default: false,
      description: 'Force right the dropdown'
    }
  },
  data: () => ({
    toggled: false,
    brands: ['slack', 'github', 'twitter']
  }),
  methods: {
    close: function () {
      if (this.children) {
        this.toggled = false
      }
    }
  }
}
</script>

<style lang="scss">
.nav-item {
  margin: 0;

  &:not(:last-child) {
    margin-right: .5rem;
  }

  .nav-button,
  .nav-link {
    display: inline-flex;
    position: relative;
    padding: 1rem;
    color: color(dark);
    font-size: 1rem;
    font-family: 'gilroy', sans-serif;
    font-weight: 300;
    text-decoration: none;
    cursor: pointer;
    white-space: nowrap;
    @include breakpoint((max, m)) {
      color: rgba(color(dark), .95);
      width: 100%;
      padding-left: 0;
    }

    .icon, svg {
      font-size: 1.25rem;
      &:not(.right) {
        margin-right: .25rem;
      }
      &.right {
        margin-left: .25rem;
      }
    }

    &.hide-decoration {
      &:before {
        background-color: transparent !important;
      }
    }

    &.dark {
      color: $white;
      @include breakpoint((max, m)) { color: color(dark); }
      &:before {
        background-color: rgba($white, .65);
        @include breakpoint((max, m)) { background-color: rgba(color(dark), .95); }
      }
    }

    &:not(.nav-button) {
      &:hover {
        &:before {
          left: 0;
          right: 0;
        }
      }

      &:before {
        content: '';
        position: absolute;
        display: block;
        left: 51%;
        right: 51%;
        @include breakpoint((max, m)) { left: 0; right: 100%; }
        bottom: 4px;
        opacity: .7;
        height: 2px;
        transition-property: left, right;
        transition-duration: .3s;
        transition-timing-function: ease-out;
        background-color: rgba(color(dark), .65);
        @include breakpoint((max, m)) { background: rgba(color(dark), .95); }
      }
    }
  }
}

.dropdown {
  position: relative;

  .dropdown-menu {
    position: absolute;
    top: 3rem;
    width: max-content;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: .75rem 0;
    border-radius: .25rem;
    background: $white;
    box-shadow: 0 50px 100px rgba(50,50,93,.1),0 15px 35px rgba(50,50,93,.15),0 5px 15px rgba(0,0,0,.1);
    z-index: 1001;

    &.dark {
      background: color(dark);
      color: color(light);

      .dropdown-item {
        color: color(light);
      }

      .dropdown-divider {
        border-bottom: 2px solid rgba(color(light), .3);
      }
    }

    @include breakpoint((max, m)) {
      position: relative;
      top: 0;
      width: 100%;
      margin: 0;
      box-shadow: 0 0 30px rgba(50,50,93,.1),0 15px 35px rgba(50,50,93,.15),0 5px 15px rgba(0,0,0,.1);
    }

    .dropdown-item {
      color: color(dark);
      padding: .25rem 1rem;
      .icon {
        font-size: 1rem;
        &:not(.right) {
          margin-right: .25rem;
        }
        &.right {
          margin-left: .25rem;
        }
      }
    }

    .dropdown-divider {
      margin: .5rem 0;
      border-bottom: 2px solid rgba(color(dark), .3);
    }

    &:not(.dropdown-menu-right) {
      left: 0;
    }
    &.dropdown-menu-right {
      right: 0;
    }
  }
}

.navbar-dropdown-enter, .navbar-dropdown-enter-active {
  animation: show-navbar-dropdown .2s ease forwards;
}

.navbar-dropdown-leave-active, .navbar-dropdown-leave-to {
  animation: hide-navbar-dropdown .2s ease forwards;
}

@keyframes show-navbar-dropdown {
    0% {
        opacity: 0;
        transform: translate(0, 10px) perspective(200px) rotateX(-2deg);
        transition: visibility 0.25s, opacity 0.25s, transform 0.25s;
    }

    100% {
        transform: translate(0, 0);
        opacity: 1;
    }
}

@keyframes hide-navbar-dropdown {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
        transform: translate(0, 10px);
    }
}
</style>
