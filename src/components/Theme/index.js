import aAstronaut from './Astronaut.vue'
import aComet from './Comet.vue'
import aPlanet from './Planet.vue'
import aRocket from './Rocket.vue'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  aAstronaut,
  aComet,
  aPlanet,
  aRocket
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
