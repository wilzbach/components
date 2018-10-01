import Vue from 'vue'
import Lib from '../src/lib'

import Showcase from './Showcase'
import './components'
import './pages'

Vue.use(Lib)

Vue.config.productionTip = false

new Vue({
  render: h => h(Showcase)
}).$mount('#app')
