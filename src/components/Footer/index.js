import aFooter from './Footer.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  aFooter,
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
