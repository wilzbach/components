import VueLazyload from 'vue-lazyload'
import VueClipboard from 'vue-clipboard2'
import { vueUse } from './utils/plugins'

// Styles
// import './assets/vendor/font-awesome/css/font-awesome.css'
// import './assets/vendor/nucleo/css/nucleo.css'
// import './assets/vendor/gilroy/gilroy.css'

// Custom
import './styles/index.scss'

// Bootstrap
import 'bootstrap/scss/bootstrap.scss'

// Components
import * as components from './components'
import * as extraComponents from './extra-components'
import * as directives from './directives'

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
