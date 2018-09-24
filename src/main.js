import Vue from 'vue'
import Lib from './lib'

import App from './App.vue'

Vue.use(Lib)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
