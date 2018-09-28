import aTitle from './Title.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  aTitle
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
