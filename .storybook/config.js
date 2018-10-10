import Vue from 'vue'
import { configure, setAddon, addDecorator } from '@storybook/vue'
import StoryRouter from 'storybook-vue-router'
import { setOptions } from '@storybook/addon-options'
import JSXAddon from 'storybook-addon-jsx'

// import 'bootstrap/scss/bootstrap-reboot.scss'
// import 'bootstrap/scss/bootstrap-grid.scss'
// import 'bootstrap/scss/utilities/_spacing.scss'
// import 'bootstrap/scss/utilities/_sizing.scss'

// Fonts
import '../src/assets/fonts/font-awesome/font-awesome.css'
import '../src/assets/fonts/nucleo/nucleo.css'
import '../src/assets/fonts/gilroy/gilroy.css'

// Styles
import '../src/styles/index.scss'

import AsyncSuite from '../src/lib'
Vue.use(AsyncSuite)

setAddon(JSXAddon)

setOptions({
  name: 'Asyncy',
  url: 'asyncy.com',
  addonPanelInRight: true,
  sortStoriesByKind: true
})

const PaddingDecoration = () => ({
  template: `<div style="padding: 30px">
    <story/>
  </div>`
})

addDecorator(PaddingDecoration)
addDecorator(
  StoryRouter(
    {},
    {
      routes: [{ path: '/' }, { path: '/about' }]
    }
  )
)

const req = require.context('../stories', true, /\.story\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
