import aLink from './Link.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  aLink
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
