import aAsset from './Asset'
import aAstronaut from './Astronaut'
import aComet from './Comet'
import aConstellation from './Constellation'
import aPlanet from './Planet'
import aRocket from './Rocket'
import aStars from './Stars'
import { registerComponents, vueUse } from '../../utils/plugins'

const components = {
  aAsset,
  aAstronaut,
  aComet,
  aConstellation,
  aPlanet,
  aRocket,
  aStars
}

const VuePlugin = {
  install (Vue) {
    registerComponents(Vue, components)
  }
}

vueUse(VuePlugin)

export default VuePlugin
