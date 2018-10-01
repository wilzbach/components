import aCategories from './Categories.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  aCategories
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
