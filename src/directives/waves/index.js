import Waves from './waves'
import { registerDirectives, vueUse } from '../../utils/plugins'
import '../../styles/_waves.scss'

const directives = {
  Waves
}

const VuePlugin = {
  install (Vue) {
    registerDirectives(Vue, directives)
  }
}

vueUse(VuePlugin)

export default VuePlugin
