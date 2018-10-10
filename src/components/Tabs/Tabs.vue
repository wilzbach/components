<template>
  <div>
    <div class="tabs-wrapper">
      <ul
        class="tabs-header"
        role="tablist"
        ref="tabsContainer">
        <li
          v-for="tab in tabs"
          ref="tabs"
          :key="`nav-${_uid}-item-tab-${tab.title}`">
          <a
            data-toggle="tab"
            role="tab"
            :href="`#${tab.title}`"
            @click.prevent="activateTab(tab)"
            :aria-selected="tab.active"
            :class="{ active: tab.active }">
            <i
              v-if="tab.icon"
              :class="tab.icon" />
            <span v-if="!iconOnly">{{ tab.title }}</span>
          </a>
        </li>
      </ul>
      <div
        v-if="!hideDecoration"
        class="tabs-decorator"
        :style="{
          width: tabDecoratorWidth,
          marginLeft: tabDecoratorMargin
        }">
        <div
          class="decorator"
          :class="{ icon: containIcons }" />
      </div>
    </div>
    <div class="tabs-content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'a-tabs',
  props: {
    iconOnly: {
      type: Boolean,
      default: false,
      description: 'Tabs only show icons'
    },
    hideDecoration: {
      type: Boolean,
      default: false,
      description: 'Hide bottom decorator'
    },
    active: {
      type: String,
      default: '',
      description: 'Default active tab (title)'
    }
  },
  data: () => ({
    tabs: [],
    activeTabIndex: 0,
    tabsWidth: [],
    tabsWidthSum: 0,
    tabsContainerWidth: 0
  }),
  provide () {
    return {
      addTab: this.addTab,
      removeTab: this.removeTab
    }
  },
  computed: {
    tabDecoratorWidth: function () {
      if (this.tabsWidth.length > 0) {
        if (this.tabsWidthSum > this.tabsContainerWidth) {
          return '0'
        } else {
          return this.tabsWidth[this.activeTabIndex] + 'px'
        }
      } else {
        return '0'
      }
    },
    containIcons: function () {
      let arr = this.tabs.filter(t => t.icon !== undefined)
      return arr.length > 0
    },
    tabDecoratorMargin: function () {
      if (this.tabsWidth.length > 0) {
        let margin = (this.tabsContainerWidth - this.tabsWidthSum) / 2
        for (let i = 0; i < this.activeTabIndex; i++) {
          margin += this.tabsWidth[i]
        }
        return margin + 'px'
      } else {
        return '0'
      }
    }
  },
  methods: {
    findAndActivateTab (title) {
      let tabToActivate = this.tabs.find(t => t.title === title)
      if (tabToActivate) {
        this.activateTab(tabToActivate)
      }
      return tabToActivate
    },
    addTab (tab) {
      this.tabs.push(tab)
    },
    removeTab (tab) {
      const tabs = this.tabs
      const index = tabs.indexOf(tab)
      if (index > -1) {
        tabs.splice(index, 1)
      }
    },
    activateTab (tab) {
      if (tab) {
        this.deactivateTabs()
        tab.active = true
        this.activeTabIndex = this.tabs.indexOf(tab)
      }
    },
    deactivateTabs () {
      this.tabs.forEach(tab => (tab.active = false))
    },
    getTabsAndContainerWidth () {
      this.tabsWidth = []
      let sum = 0
      for (let tab of this.$refs.tabs) {
        this.tabsWidth.push(tab.clientWidth)
        sum += tab.clientWidth
      }
      this.tabsWidthSum = sum

      this.tabsContainerWidth = this.$refs.tabsContainer.clientWidth
    },
    handleResize () {
      this.getTabsAndContainerWidth()
    }
  },
  mounted: function () {
    this.$nextTick(() => {
      if (!this.findAndActivateTab(this.active)) {
        this.activateTab(this.tabs[0])
      }
      this.getTabsAndContainerWidth()
      window.addEventListener('resize', this.handleResize)
    })
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
  },
  watch: {
    active: function (value) {
      this.findAndActivateTab(value)
    }
  }
}
</script>

<style lang="scss" scoped>
// @import "_nav.scss";

.tabs-wrapper {
  display: flex;
  flex: 1;
  flex-direction: column;
  position: relative;
  padding: 0;
  margin: 0;

  .tabs-decorator {
    display: flex;
    @include breakpoint((max, xxs)) { display: none; }
    position: absolute;
    bottom: .5rem;
    height: .15rem;
    transition: all duration(s) $easing;
    justify-content: center;
    .decorator {
      width: 40%;
      &.icon {
        width: 80%;
      }
      height: 100%;
      background-color: state(primary);
    }
  }
  .tabs-header {
    list-style: none;
    display: flex;
    flex: 1;
    flex-direction: row;
    @include breakpoint((max, xxs)) { flex-direction: column; }
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    padding: 0;

    li {
      font-size: 1rem;
      color: color(dark);
      a {
        padding: .5rem 1rem;
        color: color(dark);
        &.active { color: state(primary) }
        text-decoration: none;
        display: flex;
        align-items: center;

        i {
          font-size: 1rem;
          margin-right: .5rem;
        }
      }
    }
  }
}

.tabs-content {
  display: flex;
  flex: 1;
  width: 100%;
}
</style>
