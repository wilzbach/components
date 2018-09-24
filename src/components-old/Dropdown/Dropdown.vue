<template>
    <component class="dropdown"
               v-bind:is="tag"
               v-bind:class="[{show: isOpen}, {'dropdown': direction === 'down'}, {'dropup': direction ==='up'}]"
               aria-haspopup="true"
               v-bind:aria-expanded="isOpen"
               @click="toggleDropDown"
               v-click-outside="closeDropDown">

        <slot name="title">
            <a class="dropdown-toggle nav-link"
               v-bind:class="{'no-caret': hideArrow}"
               data-toggle="dropdown">
                <i v-bind:class="icon"></i>
                <span class="no-icon">{{title}}</span>
            </a>
        </slot>
        <ul class="dropdown-menu"
            v-bind:class="[{'dropdown-menu-right': position === 'right'}, {show: isOpen}, menuClasses]">
            <slot></slot>
        </ul>
    </component>
</template>
<script>
export default {
  name: "a-dropdown",
  props: {
    direction: {
      type: String,
      default: "down"
    },
    title: {
      type: String,
      description: "Dropdown title"
    },
    icon: {
      type: String,
      description: "Icon for dropdown title"
    },
    position: {
      type: String,
      description: "Position of dropdown menu (e.g right|left)"
    },
    menuClasses: {
      type: [String, Object],
      description: "Dropdown menu classes"
    },
    hideArrow: {
      type: Boolean,
      description: "Whether dropdown arrow should be hidden"
    },
    tag: {
      type: String,
      default: "li",
      description: "Dropdown html tag (e.g div, li etc)"
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleDropDown() {
      this.isOpen = !this.isOpen;
      this.$emit("change", this.isOpen);
    },
    closeDropDown() {
      this.isOpen = false;
      this.$emit("change", this.isOpen);
    }
  }
};
</script>

<style lang="scss" scoped>
.dropdown {
  list-style-type: none;
}

.dropdown .dropdown-toggle {
  cursor: pointer;
}

.dropdown,
.dropup,
.dropright,
.dropleft {
  display: inline-block;
}

.dropdown-menu {
  min-width: 12rem;

  .dropdown-item {
    padding: 0.5rem 1rem;
    font-size: $font-size-sm;
    > i,
    > svg {
      margin-right: 1rem;
      font-size: 1rem;
      vertical-align: -17%;
    }
  }
}

.dropdown-header {
  padding-left: 1rem;
  padding-right: 1rem;
  color: $gray-100;
  font-size: 0.625rem;
  text-transform: uppercase;
  font-weight: 700;
}

// Inverse dropdown menu

.dropdown-menu-inverse {
  background: #282f37;
  border-color: #242a31;

  .dropdown-item {
    color: #dadada;

    &:active,
    &:focus,
    &:hover {
      color: #fff;
      background: #31353e;
    }
  }

  .dropdown-divider {
    background: #191e23;
  }
}

// Dropdown elements

.dropdown-menu {
  a.media {
    > div {
      &:first-child {
        line-height: 1;
      }
    }

    p {
      color: $gray-600;
    }
    &:hover {
      .heading,
      p {
        color: theme-color("default") !important;
      }
    }
  }
}

// Dropown: Sizes

.dropdown-menu-sm {
  min-width: 100px;
  border: $border-radius-lg;
}

.dropdown-menu-lg {
  min-width: 260px;
  border-radius: $border-radius-lg;
}

.dropdown-menu-xl {
  min-width: 450px;
  border-radius: $border-radius-lg;
}
</style>
