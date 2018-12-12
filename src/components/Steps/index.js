import aStep from './Step.vue'
import aSteps from './Steps.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  aStep,
  aSteps,
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
