import VueClipboard from 'vue-clipboard2'
import VueLazyload from 'vue-lazyload'
import { vueUse } from './utils/plugins'

// Fonts
import './assets/fonts/gilroy/gilroy.css'

// Components
import * as components from './components'
import * as extraComponents from './extra-components'
import * as directives from './directives'

// fontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faSlack, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

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

    Vue.use(VueClipboard)
    Vue.use(VueLazyload)

    library.add(faHeart, faGithub, faSlack, faTwitter)
    Vue.component('font-awesome-icon', FontAwesomeIcon)
  }
}

vueUse(VuePlugin)

export default VuePlugin
