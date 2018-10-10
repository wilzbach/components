import aComet from './Comet.vue'
import aPlanet from './Planet.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  aComet,
  aPlanet,
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
