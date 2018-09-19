import VueLazyload from 'vue-lazyload'
import VueClipboard from 'vue-clipboard2'
import * as components from './components'
import * as extraComponents from './extra-components'
import * as directives from './directives'
import { vueUse } from './utils/plugins'
import 'bootstrap/scss/bootstrap.scss'

const VuePlugin = {
  install: function (Vue) {
    if (Vue._asyncy_vue_installed) {
      return
    }

    Vue._asyncy_vue_installed = true

    for (let item in components) {
      Vue.use(components[item])
    }

    for (let item in extraComponents) {
      Vue.use(extraComponents[item])
    }

    for (let item in directives) {
      Vue.use(directives[item])
    }

    Vue.use(VueLazyload)
    Vue.use(VueClipboard)
  }
}

vueUse(VuePlugin)

export default VuePlugin
