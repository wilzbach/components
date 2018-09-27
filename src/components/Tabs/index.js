import aTabPane from './TabPane.vue'
import aTabs from './Tabs.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  aTabPane,
  aTabs,
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
