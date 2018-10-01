import aLogo from './Logo.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  aLogo
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
